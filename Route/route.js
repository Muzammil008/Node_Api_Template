var express = require('express');
var apiRoutes = express.Router();
var jwt = require('jsonwebtoken');
var mysql = require('mysql');
var mysqlconfig = require('../config');

//Database Connection
var dbconnection = mysqlconfig.connection();
console.log(dbconnection)

//open route
apiRoutes.get('/login/:email/:password', function (req, res) {

    var token = jwt.sign({
        user: req.params.email,
        password: req.params.password
    }, 'secret', {
            expiresIn: '24h'
        });


    res.json({
        Token: token
       

    })
});


// route middleware to verify a token 
apiRoutes.use(function (req, res, next) {

    // check header or url parameters or post parameters for token
    var token = req.body.token || req.query.token || req.headers['token'];

    // decode token
    if (token) {

        // verifies secret and checks exp
        jwt.verify(token, 'secret', function (err, decoded) {
            if (err) {
                return res.json({ success: false, message: 'Failed to authenticate token.' });
            } else {
                // if everything is good, save to request for use in other routes
                req.decoded = decoded;
                next();
            }
        });

    } else {
        // if there is no token
        // return an error
        return res.status(403).send({
            success: false,
            message: 'No token provided.'
        });
    }
});

apiRoutes.get('/', function (req, res) {

    res.send("<h1>Hello Worlds</h1>");

    // dbconnection.query("SELECT * FROM customers", function (err, result, fields) {
    //     if (err) throw err;
    //     console.log(result);
    //     res.json({
    //         Data: result
    //     })
    // });


});

//URL : http://localhost:3000/api/[RouteName]
module.exports = apiRoutes;
