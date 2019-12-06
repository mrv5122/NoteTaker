var express = require('express');
var bodyParser = require('body-parser');

// Initialize the app and create a port
var app = express();
var PORT = process.env.PORT || 3000;

// Set up body parsing, static, and route middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json'}));
// static directory
app.use(express.static('./public'));

// TODO: Mount your HTML and API routes
// https://expressjs.com/en/api.html#app.use
require('./routes/apiRoutes.js')(app);
require('./routes/htmlRoutes.js')(app);

// Start the server on the port
app.listen(PORT, function() {
  console.log('Listening on PORT: ' + PORT);
});
