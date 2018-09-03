
var mysql = require('mysql');
var app = require('express')();
var connection = require('express-myconnection');

// var app = express();
app.use(
    connection(mysql,{
        host: 'localhost',
        user: 'mysql username',
        password : 'mysql password',
        port : 3306,
        database:'test'
    },'request')
);


module.exports = connection;