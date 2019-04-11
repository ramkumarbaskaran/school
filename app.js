// set variables for app
var express     = require('express');
var app         = express();
var path        = require('path');
var bodyParser  = require('body-parser');
var expressValidator = require('express-validator');

var mysql       = require('mysql');
var util = require('util');
var credentials;
try{
    credentials = require('./credentials_env'); //CREATE THIS FILE YOURSELF
}catch(e){
    throw e;
}
console.log(credentials);
// Setup MySQL Connection   
var connection  = mysql.createConnection(credentials);

// Connect to MySQL DB
connection.connect(function(err) {
    if (err) {
      console.error('error connecting: ' + err.stack);
      return;
    }
    console.log('connected as id ' + connection.threadId);
});

const con_query = util.promisify(connection.query).bind(connection);
// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// this will be used for input validation
app.use(expressValidator());

// Support for Crossdomain JSONP
app.set('jsonp callback name', 'callback');

// Get the Routes for our API
var apiRouter = require('./routers/api')(express, con_query);

// Apply Routes to App
// All of these routes will be prefixed with /api
app.use('/api', apiRouter);

// Better way to disable x-powered-by
app.disable('x-powered-by');

module.exports = app;