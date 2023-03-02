const express = require('express');
const bodyParser = require('express');
const hbs = require('express-handlebars');
const app = express();
 
const defaultRoute = require('./routes/pages');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.set('views', 'views');
app.use(express.static('public'));
app.engine('hbs', hbs({extname:'hbs', defaultLayout:'main', partialsDir:'views/partials'}));
app.set('view engine', 'hbs');

app.use('/', defaultRoute);






module.exports = {app};