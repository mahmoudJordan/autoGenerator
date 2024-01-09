const config = {
    sqlServer1: {
        server: 'MSALAMEH-WINDOW\\SQLEXPRESS',
        database: 'CE_DataBase_from_Stage',
        database : 'AdventureWorks2016',
        driver: "msnodesqlv8",
        options: {
            trustedConnection: true,
            trustServerCertificate: true,
        }
    },
    sqlServer2: {
        server: 'localhost',
        port: 1433,
        user: 'SA',
        password: 'p@ssword!!=232321',
        database: 'AdventureWorks2016',
        driver: "msnodesqlv8",
        debug: true,
        options: {
            encrypt: false
        },

    },
};

module.exports = config;
