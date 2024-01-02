class Database {
    async connect() {
        // Implement in derived classes
    }

    async query(sqlQuery) {
        // Implement in derived classes
    }

    // Add common database utility methods here
}

module.exports = Database;
