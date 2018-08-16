var Controller = require('../controllers/tumblrController')
var express = require('express')
var router = express.Router()

router.post('/recipe', Controller.postQuote);
router.post('/picture', Controller.postPicture);

module.exports = router