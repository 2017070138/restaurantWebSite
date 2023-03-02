const route = require('express').Router();
const {register} = require('../../controllers/clientController');

route.get('/signin',(req, res)=>{

    res.send('this is login page')

});

route.get('/register',  (req, res)=>{


    res.render('pages/register')

});

route.post('/register', async (req, res)=>{

    try{
        console.log(req.body.name);
        await register(req.body.name, req.body.email, req.body.password);

    }catch (e) {
        throw e;
    }
    res.redirect('/');



});



module.exports = route;