const mysql = require('mysql');
var pool = mysql.createPool({
   host:'localhost',
    port:'3306',
    user:'root',
    password:'zhangsql',
    database:'yp',
    connectionLimit:20
});
module.exports = pool;