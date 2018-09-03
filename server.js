var http = require('http');
var express = require("express");
var bodyParser = require("body-parser");

var path = require('path');
var mysql = require('mysql');

var handlebars = require('express-handlebars');
// var connection = require('./config/connection.js');

var userscontrol = require('./controllers/userscontrol.js');

var app = express();
var connection = require('express-myconnection');

var port = process.env.PORT || 4302;


app.engine('handlebars', handlebars({defaultLayout:'main'}));

app.set('view engine','handlebars');
app.set('views',path.join(__dirname,'views'));

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(express.static( __dirname + '/public'));

app.use(connection(mysql,{
    host:'localhost',
    user:'root',
    password:'root',
    port:3306,
    database:'garagesale'},'request')
);
app.get('/', userscontrol.index);
app.get('/', userscontrol.login);

app.get('/users', userscontrol.usersdisplay);
app.post('/users/add', userscontrol.save);


var server = app.listen(4302, function ()
{
    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);

});
