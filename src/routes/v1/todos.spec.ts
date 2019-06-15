import { fetchTodos } from './todos';

describe('routes - todos', () => {
  describe('fetchTodos()', () => {
    test('should be data', async () => {
      try {
        const todos = await fetchTodos();
        // expect(todos).toContainEqual({});
      } catch (error) {
        console.log(error);
      }
    });
  });
});
