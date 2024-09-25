const mongoose = require('mongoose');

const RecipeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  ingredients: { type: [String], required: true },
  instructions: { type: String, required: true },
  secret: { type: Boolean, default: false },
  price: { type: Number, required: true }
});

module.exports = mongoose.model('Recipe', RecipeSchema);
