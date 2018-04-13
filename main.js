
var express = require('express');
var app = express();
var apiRoutes = require('./Route/route');
var bodyParser = require('body-parser');
var task=require('./task');

//BodyParser MiddleWare
app.use(bodyParser.urlencoded({ extended: true }));

//Cross Domain 
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'X-Requested-With');
    next();
})

//Calling Routes
app.use('/api', apiRoutes);
// app.use('/api/task',task);

//Server Running on LocalHost 3000
app.listen(3000, function () {
    console.log('Server is Running on' + ' http://localhost:3000')
});