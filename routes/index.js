var express = require('express');
var router = express.Router();
const {create, read} = require('../controllers/recipeController')

router.get('/', read);
router.post('/create', create);

module.exports = router;
