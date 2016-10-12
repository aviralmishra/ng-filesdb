/*jshint node:true*/
'use strict';

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var compress = require('compression');
var cors = require('cors');
var favicon = require('serve-favicon');
var logger = require('morgan');
var routes;

var port = process.env.PORT || 4000;
var environment = process.env.NODE_ENV;

/* Setup middlewares. */
app.use(favicon(__dirname + '/public/favicon.ico'));

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

app.use(compress());
app.use(logger('dev'));
app.use(cors());

/* Add APIs to routes. */
routes = require('./routes/filesDbRoutes')(app);

/* On API errors, send JSON response with error message. */
app.use(function (err, req, res, next) {
  res.setHeader('Content-Type', 'application/json');
  res.status(err.status || 500).json({
    errorMessage: err.message
  });
});

app.use('/api', function (err, req, res, next) {
  res.status(err.status || 500);
  res.send({
    message: err.message
  });
});

/* Run server. */
switch (environment) {
  case 'build':
    console.log('** BUILD **');
    app.use(express.static('./dist/'));
    app.use('/*', express.static('./dist/index.html'));
    break;
  default:
    console.log('** DEV **');
    app.use(express.static('./src/client/'));
    app.use(express.static('./'));
    app.use(express.static('./tmp'));
    app.use('/*', express.static('./src/client/index.html'));
    break;
}

console.log('Starting service...');
console.log('PORT=' + port);
console.log('NODE_ENV=' + environment);

app.listen(port, function () {
  console.log('Express server listening on port ' + port);
  console.log('env = ' + app.get('env') +
    '\n__dirname = ' + __dirname +
    '\nprocess.cwd = ' + process.cwd());
});

/* Provide app for tests. */
module.exports.app = app;
