const Users = require('../model/userModel')
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
 function handleGetSignUp(req,res){
    res.render('signup.ejs')
}
module.exports = {handlePostSignup,handleGetSignUp};