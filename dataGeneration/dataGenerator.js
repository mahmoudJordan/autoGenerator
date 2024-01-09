const DependencyGraph = require("../dependencyGraph/dependencyGraph");
const generateRandomData = require("./generateRandomData");
const Descriptor = require("./descriptor");
const __reuse_inserted_dependency = false;

class DataGenerator {
  constructor(db) {
    this.db = db;
    this.counter = 0;
    this.uniquePrimaryKeys = {};
    this.dataTypes = null;
    this.descriptor = new Descriptor(db);
  }

  async init() {
    if (!this.dataTypes) {
      await this._populateDataTypes();
    }

    await this.descriptor.setCheckConstraintsForDatabase(false);
    await this.descriptor.setXmlColumnsNullable(false);
  }

  async insertRandomData() {
    try {
      await this.init();
      const dg = new DependencyGraph(this.db);
      const tables = await this.getTableNames();
      const dependencies = await dg.getTableDependencies();
      const dependencyGraph = await dg.buildDependencyGraph(tables, dependencies);
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
    const tableResults = await this.db.query(`SELECT TABLE_SCHEMA, TABLE_NAME FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_TYPE = 'BASE TABLE'`);
    return tableResults.recordset.map((row) => `${row.TABLE_SCHEMA}.${row.TABLE_NAME}`);
  }

  async insertIntoTable(table, dependencies, insertedData, alreadyProcessed = new Set(), callStack = new Set()) {
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
      if (!insertedData[dependency] || __reuse_inserted_dependency) {
        /*if (!insertedData[dependency] && __reuse_inserted_dependency) */
        await this.insertIntoTable(dependency, dependencies, insertedData, alreadyProcessed, callStack);
      }
    }

    // Remove the current table from the call stack before proceeding
    callStack.delete(table);

    const schema = await this.descriptor.getTableSchema(table);
    const { insertQuery, outputColumns } = this.buildInsertQuery(table, schema, insertedData);

    if (insertQuery) {
      console.log("Executing:", insertQuery);
      const result = await this.db.query(insertQuery);
      this.updateInsertedData(table, result, insertedData, outputColumns);
      this.counter++;
      console.log(this.counter);
    }
  }




  buildInsertQuery(table, schema, insertedData) {
    let insertQuery = `INSERT INTO ${table} (`;
    const columnValues = [];
    const outputColumns = [];//

    for (const column of schema) {

      if (column.is_computed || column.DATA_TYPE === 'xml') {
        continue;
      }

      if (column.IS_IDENTITY) {
        outputColumns.push(column.COLUMN_NAME);
        continue;
      }

      let value;
      if (column.IS_PRIMARY_KEY && !column.IS_IDENTITY && !column.REFERENCED_TABLE_NAME) {
        outputColumns.push(column.COLUMN_NAME);
        value = this.generateUniquePrimaryKeyValue(column);
      } else if (column.REFERENCED_TABLE_NAME) {
        const refData = insertedData[`${column.REFERENCED_SCHEMA_NAME}.${column.REFERENCED_TABLE_NAME}`];
        value = refData && refData.length > 0 ? refData[0][column.REFERENCED_COLUMN_NAME] : "NULL";
      } else {
        const dataType = this.getDataType(column.DATA_TYPE_SCHEMA, column.DATA_TYPE);
        value = generateRandomData(dataType, column);
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

    return { insertQuery, outputColumns };
  }

  updateInsertedData(table, insertQueryResult, insertedData, outputColumns) {
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

  generateUniquePrimaryKeyValue(column) {
    this.uniquePrimaryKeys[column.COLUMN_NAME] = this.uniquePrimaryKeys[column.COLUMN_NAME] || new Set();
    let value;
    const dataType = this.getDataType(column.DATA_TYPE_SCHEMA, column.DATA_TYPE);
    do {
      value = generateRandomData(dataType, column);
    } while (this.uniquePrimaryKeys[column.COLUMN_NAME].has(value));
    this.uniquePrimaryKeys[column.COLUMN_NAME].add(value);
    return value;
  }

  async _populateDataTypes() {
    const query = `
    SELECT 
        s.name AS schema_name,
        t.name AS type_name,
        t.system_type_id,
        t.user_type_id,  
        t.max_length,
        t.precision,
        t.scale,
        t.collation_name,
        t.is_user_defined,
        base_type.name AS base_type_name,  -- Add base type name
        base_type.max_length AS base_type_max_length,
        base_type.precision AS base_type_precision,
        base_type.scale AS base_type_scale
    FROM 
        sys.types t
    LEFT JOIN 
        sys.schemas s ON t.schema_id = s.schema_id
    LEFT JOIN
        sys.types base_type ON t.system_type_id = base_type.user_type_id;  -- Join to get base type details
    `;
    const result = await this.db.query(query);
    this.dataTypes = new Map(result.recordset.map((type) => [`${type.schema_name}.${type.type_name}`, type]));
  }

  getDataType(schema, typeName) {
    // Construct the fully qualified name
    let typeFullyQualifiedName = `${schema}.${typeName}`;

    // Fetch the UDT details from the Map
    return this.dataTypes.get(typeFullyQualifiedName);
  }
}

module.exports = DataGenerator;
