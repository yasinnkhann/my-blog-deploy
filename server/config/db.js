const mysql = require('mysql');

const db = mysql.createConnection({
    host: 'us-cdbr-east-04.cleardb.com',
    user: 'bdd470584d0e4d',
    password: '709951c8',
    database: 'heroku_6a3011ba8a9aa2e',
});

module.exports = db;
