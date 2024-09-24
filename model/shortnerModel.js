const mongoose = require('mongoose')
const shortnerSchema = new mongoose.Schema({
    shortnerID:{
        type:String,
        required:true,
    },
    redirectURL:{
        type:String,
        required:true,
    },
    createdBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"users"
    }
},{timestamps:true});

const shortURL = mongoose.model('shortURL',shortnerSchema);
module.exports = shortURL;