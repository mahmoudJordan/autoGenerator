const sql = require("mssql/msnodesqlv8");
const config = require('../config').sqlServer;
const Database = require('./dbUtils');

class MySQL extends Database {
    async connect() {
        throw Error("not Implemented yet")
    }

    async query(sqlQuery) {
        throw Error("not Implemented yet")
    }

    // Additional SQL Server specific methods
}

module.exports = SqlServer;
