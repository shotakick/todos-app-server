import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';
import routerV1 from './routes/v1';

const FRONT_ORIGIN = process.env.FRONT_ORIGIN || 'localhost';

export const app = express();

app.use(
  cors({
    origin: FRONT_ORIGIN,
    optionsSuccessStatus: 200,
  }),
);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api/v1', routerV1);

app.get('/', (req, res) => {
  res.send('Hello world.');
});

app.use((req, res) => {
  res.status(404).json({ message: 'Not Found API.' });
});

export default app;
