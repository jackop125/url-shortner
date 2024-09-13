const express = require("express");
const path = require("path")
const connectDB = require("./dbConnect");
const {handleRedirectReq} = require('./controller/handlers')
const shortURL = require("./model/shortnerModel");
const customRoute = require("./routes/routes");
const staticRoute = require("./routes/staticHome");
const app = express();
const PORT = 8000;
connectDB();
app.set("view engine", "ejs");
app.set("views",path.resolve('./view'))
app.use(express.json());
app.use(express.urlencoded({extended:false}))
app.use("/signup",staticRoute)
app.use("/url", customRoute);
app.get("url/:shortId",handleRedirectReq);
app.get('/',async (req,res)=>{
  const urls = await shortURL.find({});
  res.render('home',{
    urls:urls
  })
})
app.listen(PORT, () => {
  console.log(`SERVER STARTED ON ${PORT}`);
});
