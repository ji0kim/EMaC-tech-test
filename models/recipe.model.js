const fs = require('fs/promises');
const db = './data/data.json';

exports.selectRecipes = async (exclude_ingredients) => {
	const data = await fs.readFile(db, 'utf8');
	let recipes = JSON.parse(data);

	if (exclude_ingredients) {
		const filtered = recipes.filter((recipe) => {
			let counter = 0;
			recipe.ingredients.forEach((ingredient) => {
				if (ingredient.name !== exclude_ingredients) counter++;
			});
			if (counter === recipe.ingredients.length) {
				return recipe;
			}
		});
		recipes = filtered;
	}
	return recipes;
};
