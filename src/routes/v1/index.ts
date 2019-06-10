import express from 'express';
import todos from './todos';

export const router = express.Router();

router.use('/todos', todos);
router.use('/auth', todos);

export default router;
