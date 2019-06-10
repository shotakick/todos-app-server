import supertest from 'supertest';
import app from './app';

describe('app', () => {
  const request = supertest(app);
  describe('Hello world', () => {
    test('GET: /', async () => {
      const res = await request.get('/');
      expect(res.ok).toBeTruthy();
      expect(res.text).toBe('Hello world.');
    });
  });
  describe('Check router', () => {
    test('GET: /', () => {
      return request.get('/').expect(200);
    });
    test('GET: /api/v1/todos', () => {
      return request.get('/api/v1/todos').expect(200);
    });
    test('GET: /api/v1/auth', () => {
      return request.get('/api/v1/auth').expect(200);
    });
  });
});
