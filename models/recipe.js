const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
 
const RecipeSchema = new Schema({
  title: String,
  imgUrl: String,
  category: String,
  description: String,
  user: String
  // user: { type: Schema.Types.ObjectId, ref: 'User' }
},
{
 timestamps : true
});

const recipe = mongoose.model('Recipe', RecipeSchema);
module.exports = recipe