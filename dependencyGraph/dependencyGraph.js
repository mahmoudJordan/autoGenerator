class DependencyGraph {
    constructor(db) {
        this.db = db;
    }


    async getTableDependencies() {
        const dependencyResults = await this.db.query(`
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
            if (!dependencies[row.dependentTable]) {
                dependencies[row.dependentTable] = new Set();
            }
            dependencies[row.dependentTable].add(row.referencedTable);
        });

        return dependencies;
    }

    async buildDependencyGraph(tables, dependencies) {
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

    async topologicalSort(graph) {
        let sorted = [];
        let visited = new Set();
        let temp = new Set();
        let cyclicTables = new Set();

        const visit = (table, ancestors) => {
            if (cyclicTables.has(table)) return;

            if (temp.has(table)) {
                console.error(`Detected a cycle in table dependencies: ${[...temp].join(' -> ')} -> ${table}`);
                cyclicTables.add(table);
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
        };

        graph.forEach((ancestors, table) => {
            if (!visited.has(table) && !cyclicTables.has(table)) {
                visit(table, ancestors);
            }
        });

        return sorted;
    }
}

module.exports = DependencyGraph;
