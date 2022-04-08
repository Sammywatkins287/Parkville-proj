const mongoose = require ('mongoose');
//plugin that helps capture our username
const passportLocalMongoose = require('passport-local-mongoose')
const { stringify } = require('nodemon/lib/utils');
const passport = require('passport');
//article schema:defining the elements/structure of uur article

const signupschema = mongoose.Schema({
    userName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,

    },
    password:{
        type:String,
        required:true
    },
});
//
signupschema.plugin(passportLocalMongoose,{
    usernameField:"User Name",
});
//line 19 exposes the signup to other files
const Signup = module.exports = new mongoose.model('Signup',signupschema);