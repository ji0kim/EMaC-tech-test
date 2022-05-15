const supertest = require('supertest');
const server = require('../server');

const request = supertest(server);

test('/api', async () => {
	const { body } = await request.get('/api').expect(200);
	expect(body.message).toBe('ok');
});

describe('Get /api/recipes', () => {
	test('200 respond with all recipes', async () => {
		const { body } = await request.get('/api/recipes').expect(200);
		expect(body.recipes.length).toBe(100);
		expect(body.recipes).toBeInstanceOf(Array);
		body.recipes.forEach((recipe) => {
			expect(recipe).toMatchObject({
				id: expect.any(String),
				imageUrl: expect.any(String),
				instructions: expect.any(String),
				ingredients: expect.any(Array),
			});
			expect(
				recipe.ingredients.forEach((ingredient) => {
					expect(ingredient).toMatchObject({
						name: expect.any(String),
						grams: expect.any(Number),
					});
				})
			);
		});
	});

	test('200 /api/recipes?exclude_ingredients=banana : respond with an array of objects excluding ones having banana as its ingredients', async () => {
		const { body } = await request
			.get('/api/recipes?exclude_ingredients=banana')
			.expect(200);
		expect(body.recipes).toBeInstanceOf(Array);
		expect(body.recipes.length).toBeLessThanOrEqual(90);
	});
  
});