const express = require('express')
const router = express.Router();
const {handleGenerateNewURL,handleGetReq} = require('../controller/handlers');
const restrictToLogginedIn = require('../middleware/checkAuth');
router.route('/').post(restrictToLogginedIn,handleGenerateNewURL).get(restrictToLogginedIn,handleGetReq);


module.exports = router;