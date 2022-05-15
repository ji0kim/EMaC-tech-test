const fs = require('fs/promises');
const db = './data/data.json';

exports.selectRecipes = async () => {
  const data = await fs.readFile(db, 'utf8');
	const recipes = JSON.parse(data);
	return recipes;
};
