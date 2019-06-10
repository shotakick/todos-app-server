import request from 'supertest';
import app from './app';

describe('app', () => {
  describe('GET /', () => {
    test('should be data', async () => {
      const res = await request(app).get('/');
      expect(res.ok).toBeTruthy();
      expect(res.text).toBe('Hello world.');
    });
  });
});
