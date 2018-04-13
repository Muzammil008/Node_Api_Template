// module.exports = [{

//     "mysqlConfig": {
//         user: '',
//         password: '',
//         server: '',
//         database: '',

//     }
// }]
// var express = require('express');
// var mysql = require('mysql');
// var dbconfig = express();
// var connection = mysql.createConnection({
//     host: '127.0.0.1',
//     port: '3306',
//     user: 'root',
//     password: '12345',
//     database: 'db'
// });
// module.exports =dbconfig;


// module.exports = [
//     newFunction()
// ]

// function newFunction() {
//     var express = require('express');
//     var mysql = require('mysql');
//     var dbconfig = express();
//     var connection = mysql.createConnection({
//         host: '127.0.0.1',
//         port: '3306',
//         user: 'root',
//         password: '12345',
//         database: 'db'
//     });
// }

module.exports.connection = function () {

    var mysql = require('mysql');
    var connection = mysql.createConnection({
        host: '127.0.0.1',
        port: '3306',
        user: 'root',
        password: '12345',
        database: 'db'
    });
    return connection;
};