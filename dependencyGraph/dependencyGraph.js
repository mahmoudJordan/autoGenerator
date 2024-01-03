class DependencyGraph {
  constructor(db) {
    this.db = db;
  }

  async getTableDependencies() {
    const dependencyResults = await this.db.query(`
        SELECT 
            fk.TABLE_SCHEMA as dependentTableSchema, 
            fk.TABLE_NAME as dependentTableName, 
            pk.TABLE_SCHEMA as referencedTableSchema,
            pk.TABLE_NAME as referencedTableName,
            kcu.COLUMN_NAME as foreignKeyColumn,
            rc.UPDATE_RULE,
            rc.DELETE_RULE
        FROM 
            INFORMATION_SCHEMA.REFERENTIAL_CONSTRAINTS as rc
        JOIN 
            INFORMATION_SCHEMA.TABLE_CONSTRAINTS as fk ON rc.CONSTRAINT_NAME = fk.CONSTRAINT_NAME
        JOIN 
            INFORMATION_SCHEMA.TABLE_CONSTRAINTS as pk ON rc.UNIQUE_CONSTRAINT_NAME = pk.CONSTRAINT_NAME
        JOIN 
            INFORMATION_SCHEMA.KEY_COLUMN_USAGE as kcu ON fk.CONSTRAINT_NAME = kcu.CONSTRAINT_NAME
    `);

    let dependencies = {};
    dependencyResults.recordset.forEach((row) => {
      const dependentFullTableName = `${row.dependentTableSchema}.${row.dependentTableName}`;
      const referencedFullTableName = `${row.referencedTableSchema}.${row.referencedTableName}`;

      if (!dependencies[dependentFullTableName]) {
        dependencies[dependentFullTableName] = new Set();
      }
      dependencies[dependentFullTableName].add(referencedFullTableName);
    });

    this._logDependencies(dependencies);

    return dependencies;
  }

  async getTablesRelations() {
    const query = `
        SELECT 
            tc.TABLE_NAME AS TableName,
            kcu.COLUMN_NAME AS ColumnName,
            ccu.TABLE_NAME AS ReferencedTableName,
            ccu.COLUMN_NAME AS ReferencedColumnName
        FROM 
            INFORMATION_SCHEMA.TABLE_CONSTRAINTS tc
        JOIN 
            INFORMATION_SCHEMA.KEY_COLUMN_USAGE kcu ON tc.CONSTRAINT_NAME = kcu.CONSTRAINT_NAME
        LEFT JOIN 
            INFORMATION_SCHEMA.REFERENTIAL_CONSTRAINTS rc ON tc.CONSTRAINT_NAME = rc.CONSTRAINT_NAME
        LEFT JOIN 
            INFORMATION_SCHEMA.CONSTRAINT_COLUMN_USAGE ccu ON rc.UNIQUE_CONSTRAINT_NAME = ccu.CONSTRAINT_NAME
        WHERE 
            tc.CONSTRAINT_TYPE = 'FOREIGN KEY'
    `;

    const results = await this.db.query(query);
    let relations = {};

    results.recordset.forEach((row) => {
      if (!relations[row.TableName]) {
        relations[row.TableName] = { foreignKeys: [] };
      }
      relations[row.TableName].foreignKeys.push({
        column: row.ColumnName,
        references: {
          table: row.ReferencedTableName,
          column: row.ReferencedColumnName,
        },
      });
    });

    console.log(JSON.stringify(relations));
    return relations;
  }

  async getTablesWithColumnDetails() {
    const query = `
    SELECT 
    t.TABLE_NAME,
    c.COLUMN_NAME,
    c.DATA_TYPE,
    (CASE WHEN pk.CONSTRAINT_NAME IS NOT NULL THEN 'PRIMARY KEY' ELSE NULL END) as COLUMN_KEY,
    fk.REFERENCED_TABLE_NAME,
    fk.REFERENCED_COLUMN_NAME
FROM 
    INFORMATION_SCHEMA.TABLES t
JOIN 
    INFORMATION_SCHEMA.COLUMNS c ON c.TABLE_NAME = t.TABLE_NAME
LEFT JOIN 
    (SELECT 
        kcu.TABLE_NAME, 
        kcu.COLUMN_NAME, 
        tc.CONSTRAINT_NAME
     FROM 
        INFORMATION_SCHEMA.TABLE_CONSTRAINTS tc 
     JOIN 
        INFORMATION_SCHEMA.KEY_COLUMN_USAGE kcu ON tc.CONSTRAINT_NAME = kcu.CONSTRAINT_NAME
     WHERE 
        tc.CONSTRAINT_TYPE = 'PRIMARY KEY') pk ON pk.TABLE_NAME = c.TABLE_NAME AND pk.COLUMN_NAME = c.COLUMN_NAME
LEFT JOIN 
    (SELECT 
        kcu.TABLE_NAME, 
        kcu.COLUMN_NAME, 
        ccu.TABLE_NAME AS REFERENCED_TABLE_NAME, 
        ccu.COLUMN_NAME AS REFERENCED_COLUMN_NAME
     FROM 
        INFORMATION_SCHEMA.REFERENTIAL_CONSTRAINTS rc 
     JOIN 
        INFORMATION_SCHEMA.TABLE_CONSTRAINTS tc ON rc.CONSTRAINT_NAME = tc.CONSTRAINT_NAME
     JOIN 
        INFORMATION_SCHEMA.KEY_COLUMN_USAGE kcu ON tc.CONSTRAINT_NAME = kcu.CONSTRAINT_NAME
     JOIN 
        INFORMATION_SCHEMA.CONSTRAINT_COLUMN_USAGE ccu ON rc.UNIQUE_CONSTRAINT_NAME = ccu.CONSTRAINT_NAME
     WHERE 
        tc.CONSTRAINT_TYPE = 'FOREIGN KEY') fk ON fk.TABLE_NAME = c.TABLE_NAME AND fk.COLUMN_NAME = c.COLUMN_NAME
WHERE 
    t.TABLE_TYPE = 'BASE TABLE'
ORDER BY 
    t.TABLE_NAME, c.ORDINAL_POSITION;

    `;

    const results = await this.db.query(query);
    let tables = {};

    results.recordset.forEach((row) => {
      if (!tables[row.TABLE_NAME]) {
        tables[row.TABLE_NAME] = { columns: [], foreignKeys: [] };
      }
      tables[row.TABLE_NAME].columns.push({
        name: row.COLUMN_NAME,
        type: row.DATA_TYPE,
        key: row.COLUMN_KEY,
      });

      if (row.REFERENCED_TABLE_NAME) {
        tables[row.TABLE_NAME].foreignKeys.push({
          column: row.COLUMN_NAME,
          references: {
            table: row.REFERENCED_TABLE_NAME,
            column: row.REFERENCED_COLUMN_NAME,
          },
        });
      }
    });

    console.log(JSON.stringify(tables));
    return tables;
  }

  async buildDependencyGraph(tables, dependencies) {
    let graph = new Map();
    tables.forEach((table) => {
      graph.set(table, new Set());
    });

    Object.keys(dependencies).forEach((table) => {
      dependencies[table].forEach((dependentTable) => {
        graph.get(dependentTable).add(table);
      });
    });

    return graph;
  }

  async topologicalSort(graph) {
    let sorted = [];
    let visited = new Set();
    let temp = new Set();
    let cyclicTables = new Set();

    const visit = (table, ancestors) => {
      if (cyclicTables.has(table)) return;

      if (temp.has(table)) {
        console.error(
          `Detected a cycle in table dependencies: ${[...temp].join(
            " -> "
          )} -> ${table}`
        );
        cyclicTables.add(table);
        return;
      }

      if (!visited.has(table)) {
        temp.add(table);
        ancestors.forEach((ancestor) => {
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
    };

    graph.forEach((ancestors, table) => {
      if (!visited.has(table) && !cyclicTables.has(table)) {
        visit(table, ancestors);
      }
    });

    return sorted;
  }

  _logDependencies(dependencies) {
    // for debugging (sets are not written in console)
    // convert them to dictionary<string , array>
    let result = {};
    Object.keys(dependencies).forEach((k) => {
      result[k] = Array.from(dependencies[k]);
    });

    console.log(result);
  }
}

module.exports = DependencyGraph;
