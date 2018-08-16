const Recipe = require('../models/recipe')

class RecipeController {
  static create(req, res){
    let {title, imgUrl, category, description, user} = req.body
    Recipe.create({
      title, imgUrl, category, description, user
    })
    .then(newRecipe => {
      res.status(201).json(newRecipe)
    })
    .catch(err => {
      res.status(400).json(err.message)
    })
  }

  static read(req, res){
    Recipe.find({}).sort({updatedAt: 'desc'})
    .then(allRecipe => {
      res.status(201).json(allRecipe)
    })
    .catch(err => {
      res.status(400).json(err.message)
    })
  }

  static readById(req, res){
    Recipe.find({_id: req.params.id})
    .then(recipe => {
      res.status(201).json(recipe)
    })
    .catch(err => {
      res.status(400).json(err.message)
    })
  }

  static readOne(req, res){
    Recipe.find({$or: [{title: new RegExp(req.query.q, 'i')},
                        {category: new RegExp(req.query.q, 'i')},
                        {description: new RegExp(req.query.q, 'i')}
                      ]
    })
    .then(recipes => {
      res.status(201).json(recipes)
    })
    .catch(err => {
      res.status(400).json(err.message)
    })
  }


  static update(req, res){
    let {title, imgUrl, category, description, user} = req.body
    Recipe.findByIdAndUpdate(req.params.id,{
        title, imgUrl, category, description, user
    },function(err,recipe){
        if(err){
          res
            .status(400)
            .json(err.message)
        }
        else{
          res
            .status(201)
            .json(recipe)
        }
    })
  }

  static deleteRecipe(req, res){
      Recipe.findByIdAndRemove(req.params.id)
      .then( recipe =>{
        res
        .status(201)
        .json(recipe) 
      })
      .catch( err =>{
        res
        .status(400)
        .json(err.message)  
      })
  }
}

module.exports = RecipeController