const Recipe = require('../models/Recipe');

// GET all recipes
exports.getRecipes = async (req, res) => {
  try {
    const recipes = await Recipe.find();
    res.json(recipes);
  } catch (err) {
    res.status(500).json({ error: 'Server Error' });
  }
};

// POST (Create) a new recipe
exports.createRecipe = async (req, res) => {
  const { name, ingredients, instructions, secret, price } = req.body;
  try {
    const newRecipe = new Recipe({ name, ingredients, instructions, secret, price });
    await newRecipe.save();
    res.json(newRecipe);
  } catch (err) {
    res.status(500).json({ error: 'Server Error' });
  }
};

// PATCH (Update) a recipe
exports.updateRecipe = async (req, res) => {
  try {
    const updatedRecipe = await Recipe.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedRecipe);
  } catch (err) {
    res.status(500).json({ error: 'Server Error' });
  }
};

// DELETE a recipe
exports.deleteRecipe = async (req, res) => {
  try {
    await Recipe.findByIdAndDelete(req.params.id);
    res.json({ msg: 'Recipe Deleted' });
  } catch (err) {
    res.status(500).json({ error: 'Server Error' });
  }
};
