const express = require('express')
const router = express.Router();
const {handlePostSignup,handleGetSignUp, handleGetLogin,handlePostLogin} = require("../controller/statichandlers")
router.route('/signup').get(handleGetSignUp);
router.route("/login").get(handleGetLogin);
router.route("/postsignup").post(handlePostSignup)
router.route("/postlogin").post(handlePostLogin)

module.exports = router;