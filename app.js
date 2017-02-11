// Load Our Modules

var express = require('express');
var bodyParser = require('body-parser');
var users = require('./routes/users');
var merchants = require('./routes/merchants');
var referrals = require('./routes/referrals');
var mongoose = require('mongoose');

var app = express();

//connect to our database
//Ideally you will obtain DB details from a config file

var dbName='cra';

var connectionString='mongodb://localhost:27017/'+dbName;

mongoose.connect(connectionString);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api', users);
app.use('/api', merchants);
app.use('/api', referrals);

module.exports = app;
