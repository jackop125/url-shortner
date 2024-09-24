const {verifyUser} = require("../service/auth")

function restrictToLogginedIn(req,res,next){
    const token = req.cookies.userid;
    // console.log(token);
    
    if(!token){
        return res.redirect('/login')
    }
    const user = verifyUser(token);
    if(!user) return res.redirect('/login')
        req.user = user;
    // console.log(user);
    
    // console.log("MIDDLEWARE EXECUTED");
    
    next();

}
module.exports = restrictToLogginedIn;