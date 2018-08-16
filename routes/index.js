var express = require('express');
var router = express.Router();

const {create, read, update, deleteRecipe, readById, readOne} = require('../controllers/recipeController')
const images = require('../helpers/images')

router.get('/', read);
router.get('/find/:id', readById);
router.get('/search', readOne);
router.post('/create', create);
router.put('/edit/:id', update)
router.delete('/delete/:id', deleteRecipe)
router.post('/upload',
  images.multer.single('image'), 
  images.sendUploadToGCS,
  (req, res) => {
    res.send({
      status: 200,
      message: 'Your file is successfully uploaded',
      link: req.file.cloudStoragePublicUrl
    })
  })

module.exports = router;
