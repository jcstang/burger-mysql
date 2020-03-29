const express = require('express');
const debug = require('debug')('server');
const chalk = require('chalk');
const morgan = require('morgan');
const expressHandleBars = require('express-handlebars');
const burgerRoutes = require('./controllers/burgerController.js');

const app = express();
const PORT = process.env.PORT || 8282;
app.use(express.static('public'));
app.use(morgan('dev'));
app.use(burgerRoutes);

app.engine('handlebars', expressHandleBars({ defaultLayout: "main" }));
app.set('view engine', 'handlebars');




app.listen(PORT, function() {
  debug(`listening on port ${chalk.cyanBright(PORT)}`);
});