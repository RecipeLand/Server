const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
 
const RecipeSchema = new Schema({
  title: String,
  imgUrl: String,
  category: String,
  description: String,
  user: { type: Schema.Types.ObjectId, ref: 'User' }
});

const recipe = mongoose.model('Recipe', RecipeSchema);
module.exports = recipe