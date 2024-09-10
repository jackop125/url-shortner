const mongoose = require('mongoose')
const shortnerSchema = new mongoose.Schema({
    shortnerID:{
        type:String,
        required:true,
    },
    redirectURL:{
        type:String,
        required:true,
    }
},{timestamps:true});

const shortURL = mongoose.model('shortURL',shortnerSchema);
module.exports = shortURL;