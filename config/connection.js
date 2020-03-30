const mysql = require('mysql');
let connection;

if(process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  
  connection = mysql.createConnection({
    host: 'localhost',
    port: 8819,
    user: 'root',
    password: 'root',
    database: 'burger_db'
  });
  
}



connection.connect(function(err) {
  // TODO: something for future ME to solve
  if (err) {
    console.log(`error connecting: ${err.stack}`);
    return;
  }
  console.log(`connected as id ${connection.threadId}`);
  
});

module.exports = connection;