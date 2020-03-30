const express = require('express');
const debug = require('debug')('server');
const chalk = require('chalk');
const morgan = require('morgan');
const expressHandleBars = require('express-handlebars');
const burgerRoutes = require('./controllers/burgerController.js');

const app = express();
const PORT = process.env.PORT || 8080;
app.use(express.static('public'));
app.use(morgan('dev'));

// Parse application body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.engine('handlebars', expressHandleBars({ defaultLayout: "main" }));
app.set('view engine', 'handlebars');

// body parser needs to be before routes
// =================================================
app.use(burgerRoutes);





app.listen(PORT, function() {
  debug(`listening on port ${chalk.cyanBright(PORT)}`);
});
