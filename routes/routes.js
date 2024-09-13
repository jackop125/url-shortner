const express = require('express')
const router = express.Router();
const {handleGenerateNewURL,handleGetReq} = require('../controller/handlers')
router.route('/').post(handleGenerateNewURL).get(handleGetReq);


module.exports = router;