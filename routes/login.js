const express = require('express');
const res = require('express/lib/response');
const router = express.Router();
const passport = require('passport')
const expressValidator = require('express-validator')

//accessing the login page
router.get('/login',(req,res)=>{
    res.render('login')
});

//we are exposing our route to any file that will require it
module.exports = router
