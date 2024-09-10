const mongoose = require('mongoose')
 function connectDB() {
    mongoose.connect('mongodb://127.0.0.1:27017/urlshortner?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.10.1')
    .then(()=>{
        console.log("DB is Connected");
    })
    .catch(err=>{
        console.log("ERROR := ",err);
    })
}
module.exports = connectDB;