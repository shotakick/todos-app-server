import { fetchTodos } from './todos';

describe('routes - todos', () => {
  describe('fetchTodos()', () => {
    test('should be data', async () => {
      const data = await fetchTodos();
      expect(data).toEqual({ hoge: 'piyo' });
    });
  });
});
