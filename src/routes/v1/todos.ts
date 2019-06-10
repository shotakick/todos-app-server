import express from 'express';

export const router = express.Router();

export const fetchTodos = async () => {
  return { hoge: 'piyo' };
};

router.get('/', async (req, res) => {
  const todos = await fetchTodos();
  res.json(todos);
});

export default router;
