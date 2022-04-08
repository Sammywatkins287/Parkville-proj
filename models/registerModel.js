//a model is a structure of a database
//in a model folder we store schema there
//a schema refers to the structure of a database
//we are going to describe a schema(data that describes another data)
//first we require mogoose package to help
//define the schema
const mongoose =  require('mongoose')
const { stringify } = require('nodemon/lib/utils')
//creating the schema for register file
const registerSchema = mongoose.Schema({
    customername:{
        type:string,
        required:true
        //the data that is cominng in ,its a string and required
},
vehicletype:{
    type:string,
    required:true,
    timestsmp
}
})