/*
    SETUP
*/

// Express
var express = require('express');
var app = express();
PORT = 9124;

// Database
var db = require('./database/db-connector');

// Handlebars
var exphbs = require('express-handlebars');
app.engine('.hbs', exphbs({
    extname: ".hbs"
}));
app.set('view engine', '.hbs');

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
