const mongoose = require ('mongoose');
const { stringify } = require('nodemon/lib/utils');
//article schema:defining the elements/structure of uur article
const articleschema = mongoose.Schema({
    title:{
        type:String,
        required:true,

    },
    author:{
        type:String,
        required:true
    },
    body:{
        type:String,
        required:true
    },
})
//line 19 exposes the article to other files
const Article = module.exports = mongoose.model('Article',articleschema);