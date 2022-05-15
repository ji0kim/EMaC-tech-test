const { selectRecipes } = require('../models/recipe.model.js');

function getRecipes(req, res, next) {
  const { exclude_ingredients } = req.query;

	selectRecipes(exclude_ingredients)
		.then((recipes) => {
			res.status(200).send({ recipes: recipes });
		})
		.catch((err) => {
			console.log(err);
		});
}

module.exports = { getRecipes };
