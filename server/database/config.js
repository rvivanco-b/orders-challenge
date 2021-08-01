const express = require("express")

const mysql = require('mysql')

var app = express();

const connection = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME
});

connection.connect((err) => {
    if (err) throw err;
    console.log('Mysql Connection success');
});

module.exports = app