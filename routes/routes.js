const express = require('express')
const router = express.Router();
const {handleGenerateNewURL} = require('../controller/handlers')
router.route('/').post(handleGenerateNewURL);


module.exports = router;