const express = require("express");
const path = require("path")
const cookieParser = require('cookie-parser')
const restrictToLogginedIn = require("./middleware/checkAuth")
const connectDB = require("./dbConnect");
const {handleRedirectReq} = require('./controller/handlers')
const shortURL = require("./model/shortnerModel");
const customRoute = require("./routes/routes");
const signupRoute = require("./routes/staticHome");
// const 

const app = express();
const PORT = 8000;
connectDB();
app.set("view engine", "ejs");
app.set("views",path.resolve('./view'))
app.use(express.json());
app.use(cookieParser())
app.use(express.urlencoded({extended:false}))
app.use("/",signupRoute);
// app.use("/login",)
app.use("/url", customRoute);
app.get("/url/:shortId",handleRedirectReq);
// app.use(restrictToLogginedIn());
app.get('/',restrictToLogginedIn,async (req,res)=>{
  const urls = await shortURL.find({creadtedBy:req.user.id});
  res.render('home',{
    urls:urls
  })
})
app.listen(PORT, () => {
  console.log(`SERVER STARTED ON ${PORT}`);
});
