const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  port: 8819,
  user: 'root',
  password: '',
  database: 'burger_db'
});


connection.connect(function(err) {
  // TODO: something for future ME to solve
  
});

module.exports = connection;