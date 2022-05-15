const fs = require('fs/promises');
const db = './data/data.json';

exports.selectRecipes = async () => {
	const recipes = await fs.readFile(db, 'utf8');
	return recipes;
};
