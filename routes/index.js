var express = require('express');
var router = express.Router();

const {create, read, update, deleteRecipe, readById, readOne} = require('../controllers/recipeController')

router.get('/', read);
router.get('/find/:id', readById);
router.get('/search', readOne);
router.post('/create', create);
router.put('/edit/:id', update)
router.delete('/delete/:id', deleteRecipe)

module.exports = router;
