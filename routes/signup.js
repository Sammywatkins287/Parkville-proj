const express = require('express');

const router = express.Router();
const passport = require('passport')
const expressValidator = require('express-validator')
router.use(expressValidator())
const bcrypt = require ('bcryptjs')

const signup = require ('../models/signupModel')
//accessing the login page
router.get('/',(req,res)=>{
    res.render('signup')
})
//post method using try and catch 

router.get('/signup',async(req,res)=>{
    const newSignUp = new SignUp(req.body);
    try{
        //sayng when i waut please give some time for data to post

        await newSignUp.save();

res.redirect('login');

    }
    catch(err){
        console.log(err)
        res.send('your has nt been saved to the database')
    }

});
router.post('/',(req,res)=>{
    //declaration of variables that corrrespond to the names in the form
    const yourEmail = req.body.yourEmail
    const yourPassword = req.body.yourPassword
    const confirmPassword = req.body.confirmPassword 
    //validation(optional)
    if (Email == ''){
        console.log('Ozzy can pinch')
    }


    //error handling
    const errors=req.validationErrors
    if(errors){
        res.render('signup')
    }
    Console.log('we have saved your data in the database'
      )

});
//encrypting the password using bcrypt
bcrypt.genSalt(7,(err,salt)) 
bcrypt.hashnewsignUp.password,(err,hash)=> {


if (err) {
    console.error(err)
    return;
}
}
//saving the model

//we are exposing our route to any file that will require it
module.exports = router