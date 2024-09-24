const Users = require('../model/userModel')
const {setUser,verifyUser} = require('../service/auth')
async function handlePostSignup(req,res){
    if(!req.body){
        return res.status(200).send("FILL DATA Please");
    }
    const {name,email,password} = req.body;
    try{
        const result = await Users.create({
            name:name,
            email:email,
            password:password
        })
        return res.redirect('/login');
    }catch(err){
        return res.status(500).send(err);
    }
    
}
async function handlePostLogin(req,res){
    if(!req.body){
        return res.status(200).send("FILL DATA Please");
    }
    const {email,password} = req.body;
    try{
        const user = await Users.findOne({email:email,password:password});
        if(!user){
            return res.redirect('/login');
        }
        // const sessionId = generateRandomId(16);
        const token = setUser(user)
        res.cookie("userid",token);
        return res.redirect('/');
    }catch(err){
        return res.status(500).send(err);
    }
}
 function handleGetSignUp(req,res){
    res.render('signup.ejs')
}
 function handleGetLogin(req,res){
    res.render('login.ejs')
}
module.exports = {handlePostSignup,handleGetSignUp,handleGetLogin,handlePostLogin};