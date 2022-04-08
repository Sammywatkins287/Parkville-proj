const express = require('express');

const router = express.Router();
const passport = require('passport')
const expressValidator = require('express-validator')
router.use(expressValidator())

//accessing the login page
router.get('/',(req,res)=>{
    res.render('register')
});
router.post('/',(req,res)=>{
    //declaration of variables that corrrespond to the names in the form
    const CustomerName = req.body
    const Email = req.body
    const VehicleType = req.body
    const NumberPlate = req.body
    const TelephoneNumber = req.body
    //validation(optional)
    if (Email == ''){
        console.log('Ozzy can pinch')
    }

    req.checkBody('CustomerName','Name is required').notEmpty()
    req.checkBody('Email','Email is required').notEmpty()
    req.checkBody('VehicleType','VehicleType is required').notEmpty()
    req.checkBody('NumberPlate','NumberPlate is required').notEmpty()
    req.checkBody('TelephoneNumber','TelephoneNumber is required').notEmpty()
    //error handling
    const errors=req.validationErrors
    if(errors){
        res.render('register')
    }
    Console.log('This is the'+ CustomerName  )

})
//we are exposing our route to any file that will require it
module.exports = router