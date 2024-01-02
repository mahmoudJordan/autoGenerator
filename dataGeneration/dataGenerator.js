const DependencyGraph = require("../dependencyGraph/dependencyGraph");
const generateRandomData = require("./generateRandomData");
const __reuse_inserted_dependency = true ;


class DataGenerator {
  constructor(db) {
    this.db = db;
    this.counter = 0;
    this.uniquePrimaryKeys = {};
  }

  async insertRandomData() {
    try {
      const dg = new DependencyGraph(this.db);
      const tables = await this.getTableNames();
      const dependencies = await dg.getTableDependencies();
      const dependencyGraph = await dg.buildDependencyGraph(
        tables,
        dependencies
      );
      const sortedTables = await dg.topologicalSort(dependencyGraph);

      let insertedData = {};

      for (const table of sortedTables) {
        await this.insertIntoTable(table, dependencies, insertedData);
      }

      console.log("Data insertion completed. Total insertions:", this.counter);
    } catch (err) {
      console.error("Error in insertRandomData:", err);
    }
  }

  async getTableNames() {
    const tableResults = await this.db.query(
      `SELECT TABLE_NAME FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_TYPE = 'BASE TABLE'`
    );
    return tableResults.recordset.map((row) => row.TABLE_NAME);
  }

  async insertIntoTable(
    table,
    dependencies,
    insertedData,
    alreadyProcessed = new Set(),
    callStack = new Set()
  ) {
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
      if (!insertedData[dependency] || __reuse_inserted_dependency) {/*if (!insertedData[dependency] && __reuse_inserted_dependency) */
        await this.insertIntoTable(
          dependency,
          dependencies,
          insertedData,
          alreadyProcessed,
          callStack
        );
      }
    }

    // Remove the current table from the call stack before proceeding
    callStack.delete(table);

    const schema = await this.getTableSchema(table);
    const {insertQuery , outputColumns} = this.buildInsertQuery(table, schema, insertedData);

    if (insertQuery) {
      console.log("Executing:", insertQuery);
      const result = await this.db.query(insertQuery);
      this.updateInsertedData(table, result, insertedData , outputColumns);
      this.counter++;
      console.log(this.counter);
    }
  }

  async getTableSchema(table) {
    const query = `
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
`;

    const result = await this.db.query(query);
    return result.recordset;
  }

  buildInsertQuery(table, schema, insertedData) {
    let insertQuery = `INSERT INTO ${table} (`;
    const columnValues = [];
    const outputColumns = [];

    for (const column of schema) {
      if (column.IS_IDENTITY) {
        outputColumns.push(column.COLUMN_NAME);
        continue;
      }

      let value;
      if (
        column.IS_PRIMARY_KEY &&
        !column.IS_IDENTITY &&
        !column.REFERENCED_TABLE_NAME
      ) {
        outputColumns.push(column.COLUMN_NAME);
        value = this.generateUniquePrimaryKeyValue(
          column.COLUMN_NAME,
          column.DATA_TYPE
        );
      } else if (column.REFERENCED_TABLE_NAME) {
        const refData = insertedData[column.REFERENCED_TABLE_NAME];
        value =
          refData && refData.length > 0
            ? refData[0][column.REFERENCED_COLUMN_NAME]
            : "NULL";
      } else {
        value = generateRandomData(column.DATA_TYPE);
      }

      columnValues.push(value === "NULL" ? value : `'${value}'`);
      insertQuery += `[${column.COLUMN_NAME}], `;
    }

    if (columnValues.length > 0) {
      insertQuery = insertQuery.slice(0, -2) + ")";

      if (outputColumns.length > 0) {
        insertQuery += ` OUTPUT Inserted.${outputColumns[0]} `;
      }

      insertQuery += " VALUES (" + columnValues.join(", ") + ");";
    }

    return {insertQuery , outputColumns};
  }

  updateInsertedData(table, insertQueryResult, insertedData , outputColumns) {
    if (outputColumns.length) {
        // const identityResult = await sql.query(identityQuery);
        // Store the identity value
        insertedData[table] = insertedData[table] || [];
        insertedData[table].push(insertQueryResult.recordset[0]);
    } else {
        // Handle cases where no recordset is returned (e.g., no identity column)
        if (!insertedData[table]) {
            insertedData[table] = [];
        }
        insertedData[table].push({}); // Push an empty object to signify that data was inserted
    }
  }

  generateUniquePrimaryKeyValue(columnName, dataType) {
    this.uniquePrimaryKeys[columnName] =
      this.uniquePrimaryKeys[columnName] || new Set();
    let value;
    do {
      value = generateRandomData(dataType);
    } while (this.uniquePrimaryKeys[columnName].has(value));
    this.uniquePrimaryKeys[columnName].add(value);
    return value;
  }

  // Additional utility methods as needed
}

module.exports = DataGenerator;
