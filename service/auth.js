// const sessionIdToUserMap = new Map();
// function setUser(id,user){
//     sessionIdToUserMap.set(id,user);
// }
// function getUser(id){
//    return sessionIdToUserMap.get(id);
// }
// module.exports = {
//     setUser,
//     getUser
// }

const jwt = require("jsonwebtoken");
const secretKey = "Pass@123";
function setUser(user){
    return jwt.sign({
      id:user._id,
      email:user.email
    },secretKey);
}
function verifyUser(token){
    if(!token) return null;
    return jwt.verify(token,secretKey);
}

module.exports = {setUser,verifyUser}