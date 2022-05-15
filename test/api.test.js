const supertest = require('supertest');
const server = require('../server');

const request = supertest(server);

test('/api', async () => {
	await request.get('/api').expect(200);
});

describe('Get /api/recipes', () => {
	test('200 respond with all reciepes', async () => {
		const { body } = await request.get('/api/recipes').expect(200);
	});
});