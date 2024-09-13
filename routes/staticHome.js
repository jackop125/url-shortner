const express = require('express')
const router = express.Router();
const {handlePostSignup,handleGetSignUp} = require("../controller/statichandlers")
router.route('/').get(handleGetSignUp)
router.route("/postsignup").post(handlePostSignup)

module.exports = router;