const recipeRouter = require('express').Router();
const { getRecipes } = require('../controllers/recipe.controller.js');

recipeRouter.route('/').get(getRecipes);

module.exports = recipeRouter;
