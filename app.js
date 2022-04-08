const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');
const flash = require('connect-flash');
//const session = require('express-session');
const passport = require('passport');
const session = require('express-session')({
    //no tracing footprint
    secret: 'secret',
    //session shouldnot be saved 
    resave: false,
    //
    saveUninitialized: false
  });
  
//we are qualifying config to be a package but config
//our own i.e we just created it
const config = require('./config/database');
//create a model
//route section
let loginRoutes = require('./routes/login')
const app = express();
const article = require('./models/article');

const registerRoutes= require('./routes/register')
//const port = process.env. port 
const Signup = require ('./models/signupModel')

//creating a connection to the mongo database 
//controller specifying its location
mongoose.connect(config.database)
const db = mongoose.connection;
db.once('open',()=> {
    console.log('connected to mongodb');
})
db.on('error',(err)=>{
    console.error('connection error',err)
})

//setting up aview engine
app.engine('pug', require('pug').__express);

app.set('view engine','pug')
app.set('views',path.join(__dirname,'views'))
//body-parser middleware section
app.use(express.json())
app.use(bodyParser.urlencoded({ extended:false}));
app.use(session);

app.use(passport.initialize());
app.use(passport.session());

passport.use(Signup.createStrategy());
//inbuilt function
passport.serializeUser( Signup.serializeUser())
passport.deserializeUser(Signup.deserializeUser())



//flash middleware
app.use(require('connect-flash')());
app.use(function (req, res, next) {
  res.locals.messages = require('express-messages')(req, res);
  next();
});



//app.use(expressValidator({
   // errorFormatter:(param,msg,value)



//setting directory for static files
app.use(express.static(path.join(__dirname, "public")))
 
//express session middleware
app.use(session({
    secret: 'keyboard cat',
    resave: true,
    saveUninitialized: true
  }));
  
//instructing th controller to point out the login file
//@ this line below we are using middleware
app.use('/login',loginRoutes)
app.use('/register',registerRoutes)
//post route middleware whereas we are using the same
//variable that we
app.use('/form/submit',registerRoutes)
app.use('signup',signupRoutes)

//every time a user hits a non existing route
app.get('*', (req, res) => {
    res.status(404).send('This is an invalid URL')
  })
  // For invalid routes as in if someone hits a non existent route.This should always be the last route after all other routes are excecuted.the message that appears in case someone searches for a route that doesnt exist on my server


//establishing the server listening port

app.listen(1000,()=>{
    console.log('The server has started on port 1000')
})
