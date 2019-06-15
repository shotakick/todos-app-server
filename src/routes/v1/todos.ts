import express from 'express';
import * as todosDbClient from '../../clients/todosDbClient';

const COLLECTION_NAME = 'todos';

export const router = express.Router();

export const fetchTodos = async () => {
  const collection = await todosDbClient.getCollection(COLLECTION_NAME);
  const todos = await collection.find().toArray();
  return todos;
};

router.get('/', async (req, res) => {
  try {
    res.json(await fetchTodos());
  } catch (error) {
    res.status(500).json({ error });
  }
});

export default router;
