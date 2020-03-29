const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  port: 8819,
  user: 'root',
  password: 'root',
  database: 'burger_db'
});


connection.connect(function(err) {
  // TODO: something for future ME to solve
  if (err) {
    console.log(`error connecting: ${err.stack}`);
    return;
  }
  console.log(`connected as id ${connection.threadId}`);
  
});

module.exports = connection;