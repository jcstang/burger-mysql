const express = require('express');
const debug = require('debug')('server');
const chalk = require('chalk');
const morgan = require('morgan');

const app = express();
const PORT = process.env.PORT || 8282;
app.use(morgan('dev'));


app.get('/', function(req, res) {
  res.end('Hey there, code: ' + res.statusCode);
});


app.listen(PORT, function() {
  debug(`listening on port ${chalk.cyanBright(PORT)}`);
});