var express = require("express");
var path = require("path");

var PORT = process.env.PORT || 8080;

var app = express();

app.use(express.static("public"));

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set Handlebars
var exphbs = require("express-handlebars");

app.engine('.handlebars', exphbs({ defaultLayout: 'main', extname: '.handlebars' }));
app.set('views', path.join(__dirname, 'pizza/views'));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
var routes = require("./pizza/controllers/pizza_controller.js");

app.use(routes);

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});
