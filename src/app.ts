import cors from 'cors';
import express from 'express';

const FRONT_ORIGIN = process.env.FRONT_ORIGIN || 'localhost';

export const app = express();

app.use(
  cors({
    origin: FRONT_ORIGIN,
    optionsSuccessStatus: 200,
  }),
);

app.get('/', async (req, res) => {
  const data = 'Hello world.';
  return res.send(data);
});

export default app;
