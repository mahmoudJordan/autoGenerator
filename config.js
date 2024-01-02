const config = {
    sqlServer: {
        server: 'MSALAMEH-WINDOW\\SQLEXPRESS',
        database: 'CE_DataBase_from_Stage',
        driver: "msnodesqlv8",
        options: {
            trustedConnection: true,
            trustServerCertificate: true,
        }
    },
    // Add configurations for other databases
};

module.exports = config;
