const SqlServer = require('./database/sqlServer');
const DataGenerator = require('./dataGeneration/dataGenerator');
async function main() {
    const db = new SqlServer();
    await db.connect();
    const dataGenerator = new DataGenerator(db);
    await dataGenerator.insertRandomData();
}

main().catch(console.error);
