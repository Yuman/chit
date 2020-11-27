const mysql = require('mysql');
const connection = mysql.createConnection({
  host: 'sql3.freemysqlhosting.net',
  user: 'sql3378241',
  database: 'sql3378241',
  password: 'EhKxlhgz2D'
});
connection.connect();
module.exports = connection;

// freemysqlhosting  kennethyuman/$eO0BOx%OR3HhVV$

// https://webdeasy.de/en/complete-login-system-with-node-js-vue-js-restapi-jwt-part-1-2