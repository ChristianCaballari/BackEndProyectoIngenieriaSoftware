const sql = require('mssql');
const sqlDBConnetion = {
    server: process.env.SERVER,
    user: process.env.USER,
    password: '123',
    database: process.env.DATABASE,
    options: {
        trustServerCertificate:true
    }
}

module.exports = {
   sql,
   sqlDBConnetion
}
