var express = require('express');
var router = express.Router();
const {create, read, readById, readOne} = require('../controllers/recipeController')

router.get('/', read);
router.get('/find/:id', readById);
router.get('/search', readOne);
router.post('/create', create);

module.exports = router;
