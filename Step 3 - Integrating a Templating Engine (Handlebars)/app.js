/*
    SETUP
*/

// Imports
var express = require('express');
var exphbs = require('express-handlebars');

// Express
var app = express();
PORT = 9124;

// Database
var db = require('./database/db-connector');

// Handlebars
app.engine('hbs', exphbs({
    layoutsDir: __dirname + '/views/layouts',
    extname: 'hbs',
    defaultLayout: 'main',
    viewsDir: __dirname + '/views'
}));
app.set('view engine', 'hbs');

/*
    ROUTES
*/
app.get('/', function(req, res)
    {
        res.render('index');
    });

/*
    LISTENER
*/
app.listen(PORT, function(){
    console.log('Express started on http://localhost:' + PORT + '; press Ctrl-C to terminate.')
});