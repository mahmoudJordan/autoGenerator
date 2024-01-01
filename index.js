const sql = require('mssql');
const { simpleFaker, fakerEN } = require('@faker-js/faker');

const faker = fakerEN;
let counter = 0;
const config = {
    user: 'SA',
    password: 'p@ssword!!=232321',
    server: 'localhost',
    database: 'CE_DataBase_from_Stage',
    options: {
        trustedConnection: true,
        trustServerCertificate: true,
    }
};


async function getTableDependencies() {
    const dependencyResults = await sql.query(`
        SELECT 
            fk.TABLE_NAME as dependentTable, 
            pk.TABLE_NAME as referencedTable
        FROM 
            INFORMATION_SCHEMA.REFERENTIAL_CONSTRAINTS as rc
        JOIN 
            INFORMATION_SCHEMA.TABLE_CONSTRAINTS as fk ON rc.CONSTRAINT_NAME = fk.CONSTRAINT_NAME
        JOIN 
            INFORMATION_SCHEMA.TABLE_CONSTRAINTS as pk ON rc.UNIQUE_CONSTRAINT_NAME = pk.CONSTRAINT_NAME
    `);

    let dependencies = {};
    dependencyResults.recordset.forEach(row => {
        // Add the referenced table as a dependency for the dependent table
        if (!dependencies[row.dependentTable]) {
            dependencies[row.dependentTable] = new Set();
        }
        dependencies[row.dependentTable].add(row.referencedTable);
    });

    return dependencies;
}


async function buildDependencyGraph(tables, dependencies) {
    let graph = new Map();
    tables.forEach(table => {
        graph.set(table, new Set());
    });

    Object.keys(dependencies).forEach(table => {
        dependencies[table].forEach(dependentTable => {
            graph.get(dependentTable).add(table);
        });
    });

    return graph;
}

async function topologicalSort(graph) {
    let sorted = [];
    let visited = new Set();
    let temp = new Set();
    let cyclicTables = new Set(); // To track tables involved in cycles

    function visit(table, ancestors) {
        if (cyclicTables.has(table)) return; // Skip tables already identified in a cycle

        if (temp.has(table)) {
            console.error(`Detected a cycle in table dependencies: ${[...temp].join(' -> ')} -> ${table}`);
            cyclicTables.add(table); // Mark this table as part of a cycle
            return;
        }

        if (!visited.has(table)) {
            temp.add(table);
            ancestors.forEach(ancestor => {
                if (!cyclicTables.has(ancestor)) {
                    visit(ancestor, graph.get(ancestor) || []);
                }
            });
            temp.delete(table);

            if (!cyclicTables.has(table)) {
                visited.add(table);
                sorted.push(table);
            }
        }
    }

    graph.forEach((ancestors, table) => {
        if (!visited.has(table) && !cyclicTables.has(table)) {
            visit(table, ancestors);
        }
    });

    return sorted;
}


async function insertIntoTable(table, dependencies, insertedData, alreadyProcessed = new Set(), callStack = new Set()) {
    // Avoid re-processing tables
    if (alreadyProcessed.has(table)) {
        return;
    }

    // Detect cyclical dependencies
    if (callStack.has(table)) {
        console.error(`Cyclical dependency detected at table: ${table}`);
        return; // Break the cycle
    }
    callStack.add(table);


    // Check if the table's dependencies are already filled
    for (const dependency of dependencies[table] || []) {
        // if (!insertedData[dependency]) {
            await insertIntoTable(dependency, dependencies, insertedData, alreadyProcessed, callStack);
        // }
    }

    // Remove the current table from the call stack before proceeding
    callStack.delete(table);



    // Schema query and data insertion logic for the current table
    const schemaResult = await sql.query(`
    SELECT 
    c.NAME as COLUMN_NAME, 
    t.NAME as DATA_TYPE,
    c.is_identity as IS_IDENTITY,
    fk.name as FK_NAME,
    ref_t.name as REFERENCED_TABLE_NAME,
    ref_c.name as REFERENCED_COLUMN_NAME,
    CASE WHEN pk.column_id IS NOT NULL THEN 1 ELSE 0 END as IS_PRIMARY_KEY
FROM 
    sys.columns c
INNER JOIN 
    sys.types t ON c.user_type_id = t.user_type_id
LEFT JOIN 
    sys.foreign_key_columns as fkc ON fkc.parent_object_id = c.object_id AND fkc.parent_column_id = c.column_id
LEFT JOIN 
    sys.foreign_keys as fk ON fkc.constraint_object_id = fk.object_id
LEFT JOIN 
    sys.tables as ref_t ON fk.referenced_object_id = ref_t.object_id
LEFT JOIN 
    sys.columns as ref_c ON fkc.referenced_column_id = ref_c.column_id AND fk.referenced_object_id = ref_c.object_id
LEFT JOIN 
    (SELECT 
        ic.object_id, 
        ic.column_id
     FROM 
        sys.index_columns ic
     INNER JOIN 
        sys.indexes i ON ic.object_id = i.object_id AND ic.index_id = i.index_id
     WHERE 
        i.is_primary_key = 1
    ) as pk ON c.object_id = pk.object_id AND c.column_id = pk.column_id
WHERE 
    c.object_id = OBJECT_ID(N'${table}')
`);

    const schema = schemaResult.recordset;

    let insertQuery = `INSERT INTO ${table} (`;
    let valuesQuery = '';
    const columnValues = [];
    const columnsNames = [];
    const outputColumns = [];

    for (const column of schema) {
        if (column.IS_IDENTITY) {
            outputColumns.push(column.COLUMN_NAME); // Collect identity columns for output
            continue;
        }


        let data;
        if (column.IS_PRIMARY_KEY && !column.IS_IDENTITY && !column.REFERENCED_TABLE_NAME) {
            // Generate unique value for primary key columns
            outputColumns.push(column.COLUMN_NAME);
            data = generateUniquePrimaryKeyValue(column.COLUMN_NAME, column.DATA_TYPE);
        } else if (column.REFERENCED_TABLE_NAME) {
            const refData = insertedData[column.REFERENCED_TABLE_NAME];
            data = refData && refData.length > 0 ? refData[0][column.REFERENCED_COLUMN_NAME] : 'NULL';
        } else if (!column.IS_IDENTITY) {
            data = generateRandomData(column.DATA_TYPE);
        }

        insertQuery += `[${column.COLUMN_NAME}], `;
        columnValues.push(data === 'NULL' ? data : `'${data}'`);
        columnsNames.push(column.COLUMN_NAME);
    }

    if (columnValues.length > 0) {
        insertQuery = insertQuery.slice(0, -2) + ') '; // Remove last comma

        // debugging
        const commaSaperatedValues = columnValues.map((cv, i) => {
            let pair = {}
            pair[columnsNames[i]] = cv;
            return pair;
        });

        console.log(commaSaperatedValues)


        if (outputColumns.length > 0) {
            valuesQuery += ` OUTPUT Inserted.${outputColumns[0]} `;
        }
        valuesQuery += ' VALUES (';
        valuesQuery += columnValues.join(', ') + ');';
        insertQuery += valuesQuery;


        console.log(insertQuery);
        const insertResult = await sql.query(`${insertQuery}`);


        // Store the inserted data
        if (outputColumns.length) {
            // const identityResult = await sql.query(identityQuery);
            // Store the identity value
            insertedData[table] = insertedData[table] || [];
            insertedData[table].push(insertResult.recordset[0]);
            ++counter
            console.log(counter);
        } else {
            // Handle cases where no recordset is returned (e.g., no identity column)
            if (!insertedData[table]) {
                insertedData[table] = [];
            }
            insertedData[table].push({}); // Push an empty object to signify that data was inserted
        }
    }
}


const uniquePrimaryKeys = {}; // Object to track unique primary key values

function generateUniquePrimaryKeyValue(columnName, dataType) {
    uniquePrimaryKeys[columnName] = uniquePrimaryKeys[columnName] || new Set();

    let value;
    do {
        value = generateRandomData(dataType);
    } while (uniquePrimaryKeys[columnName].has(value));

    uniquePrimaryKeys[columnName].add(value);
    return value;
}

async function insertRandomData() {
    try {
        await sql.connect(config);

        const tableResults = await sql.query(`SELECT TABLE_NAME FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_TYPE = 'BASE TABLE'`);
        let tables = tableResults.recordset.map(row => row.TABLE_NAME);

        const dependencies = await getTableDependencies();
        const dependencyGraph = await buildDependencyGraph(tables, dependencies);
        const sortedTables = await topologicalSort(dependencyGraph);

        let insertedData = {}; // Initialize insertedData object

        for (const table of sortedTables) {
            await insertIntoTable(table, dependencies, insertedData);
        }

        console.log("finished");
    } catch (err) {
        console.error(err);
    }
}



function generateRandomData(dataType) {
    switch (dataType) {
        case 'int':
            return simpleFaker.number.int(2147483647)
        case 'smallint':
            return simpleFaker.number.int(32767)
        case 'tinyint':
            return simpleFaker.number.int(255)
        case 'bigint':
            return simpleFaker.number.int(9223372036854775807)
        case 'bit':
            return faker.datatype.boolean() ? 1 : 0;
        case 'varchar':
        case 'nvarchar':
        case 'text':
        case 'ntext':
            return faker.lorem.words();
        case 'char':
        case 'nchar':
            return faker.helpers.arrayElement(faker.lorem.words().split(' ')).charAt(0);
        case 'date':
            return faker.date.past().toISOString().split('T')[0];
        case 'datetime':
        case 'datetime2':
        case 'datetimeoffset':
        case 'smalldatetime':
            return faker.date.past().toISOString();
        case 'time':
            return faker.date.past().toLocaleTimeString();
        case 'float':
        case 'real':
            return faker.datatype.float();
        case 'decimal':
        case 'money':
        case 'smallmoney':
        case 'numeric':
            return faker.finance.amount();
        case 'uniqueidentifier':
            return simpleFaker.datatype.uuid();
        case 'binary':
        case 'varbinary':
        case 'image':
            // Return a random byte array (in hex format for simplicity)
            return faker.datatype.hexaDecimal(16).substring(2);
        case 'xml':
            // Simple XML example
            return '<root><element>' + faker.lorem.words() + '</element></root>';
        case 'json':
            // Simple JSON object
            return JSON.stringify({ key: faker.lorem.word() });
        // Add more cases for other data types as needed
        default:
            return null;
    }
}


insertRandomData();

