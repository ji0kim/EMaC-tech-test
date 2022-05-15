const { selectRecipes } = require('../models/recipe.model.js');

function getRecipes(req, res, next) {
	selectRecipes()
		.then((recipes) => {
			res.status(200).send({ recipes });
		})
		.catch((err) => {
			console.log(err);
		});
}

module.exports = { getRecipes };
