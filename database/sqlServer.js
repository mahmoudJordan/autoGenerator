const sql = require("mssql/msnodesqlv8");
const config = require("../config").sqlServer;
const Database = require("./dbUtils");

class SqlServer extends Database {
  async connect() {
    try {
      await sql.connect(config);
      console.log("Connected to SQL Server");
    } catch (err) {
      console.error("Error connecting to SQL Server: ", err);
      throw err;
    }
  }

  async query(sqlQuery) {
    try {
      return await sql.query(sqlQuery);
    } catch (err) {
      console.error(`Error executing query: \n\n${sqlQuery}`, err);
      throw err;
    }
  }

  // Additional SQL Server specific methods
}

module.exports = SqlServer;
