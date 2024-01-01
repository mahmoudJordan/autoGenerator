const sql = require('mssql');
const { simpleFaker, fakerEN } = require('@faker-js/faker');

const faker = fakerEN;

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

async function sortTablesBasedOnDependencies(tables, dependencies) {
    let sorted = [], visited = {};

    function visit(table) {
        if (visited[table]) return;
        visited[table] = true;

        // Visit all tables that are dependent on this one
        dependencies[table]?.forEach(visit);

        sorted.push(table);
    }

    tables.forEach(visit);
    return sorted;
}

async function insertRandomData() {
    try {
        await sql.connect(config);

        const tableResults = await sql.query(`SELECT TABLE_NAME FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_TYPE = 'BASE TABLE'`);
        let tables = tableResults.recordset.map(row => row.TABLE_NAME);

        const dependencies = await getTableDependencies();
        const sortedTables = await sortTablesBasedOnDependencies(tables, dependencies);

        let insertedData = {}; // Stores inserted data for each table

        async function insertIntoTable(table, alreadyProcessed = new Set()) {
            // Avoid re-processing tables
            if (alreadyProcessed.has(table)) {
                return;
            }


            // Check if the table's dependencies are already filled
            for (const dependency of dependencies[table] || []) {
                if (!insertedData[dependency]) {
                    await insertIntoTable(dependency); // Recursively fill dependencies first
                }
            }


            // Schema query and data insertion logic for the current table
            const schemaResult = await sql.query(`
           SELECT 
               c.NAME as COLUMN_NAME, 
               t.NAME as DATA_TYPE,
               c.is_identity as IS_IDENTITY,
               fk.name as FK_NAME,
               ref_t.name as REFERENCED_TABLE_NAME,
               ref_c.name as REFERENCED_COLUMN_NAME
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
           WHERE 
               c.object_id = OBJECT_ID(N'${table}')
       `);

            const schema = schemaResult.recordset;

            let insertQuery = `INSERT INTO ${table} (`;
            let valuesQuery = 'VALUES (';
            const columnValues = [];
            const outputColumns = [];

            for (const column of schema) {
                if (column.IS_IDENTITY) {
                    outputColumns.push(column.COLUMN_NAME); // Collect identity columns for output
                    continue;
                }

                let data;
                if (column.REFERENCED_TABLE_NAME) {
                    const refData = insertedData[column.REFERENCED_TABLE_NAME];
                    data = refData && refData.length > 0 ? refData[0][column.REFERENCED_COLUMN_NAME] : 'NULL';
                } else {
                    data = generateRandomData(column.DATA_TYPE);
                }

                insertQuery += `[${column.COLUMN_NAME}], `;
                columnValues.push(data === 'NULL' ? data : `'${data}'`);
            }

            if (columnValues.length > 0) {
                insertQuery = insertQuery.slice(0, -2) + ') '; // Remove last comma
                valuesQuery += columnValues.join(', ') + ');';
                insertQuery += valuesQuery;


                let identityQuery = '';

                if (outputColumns.length > 0) {
                    identityQuery = `SELECT SCOPE_IDENTITY() as ${outputColumns[0]}`;
                }

                insertQuery += identityQuery;

                console.log(insertQuery);
                const insertResult = await sql.query(`${insertQuery} ${identityQuery}`);

                // Store the inserted data
                if (identityQuery) {
                    // const identityResult = await sql.query(identityQuery);
                    // Store the identity value
                    insertedData[table] = insertedData[table] || [];
                    insertedData[table].push(insertResult.recordset[0]);
                } else {
                    // Handle cases where no recordset is returned (e.g., no identity column)
                    insertedData[table].push({}); // Push an empty object to signify that data was inserted
                }
            }
        }

        // Modify the main loop in insertRandomData function
        for (const table of sortedTables) {
            if (!insertedData[table]) {
                await insertIntoTable(table, new Set());
            }
        }
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
