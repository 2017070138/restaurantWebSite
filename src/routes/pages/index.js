const route = require('express').Router();

route.get('/', (req, res)=>{

    res.render('pages/index')

});



route.use('/auth',require('./auth'));




module.exports = route;