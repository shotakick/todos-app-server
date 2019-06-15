import mongodb from 'mongodb';

const USER = encodeURIComponent(process.env.MONGO_INITDB_ROOT_USERNAME || 'root');
const PASS = encodeURIComponent(process.env.MONGO_INITDB_ROOT_PASSWORD || 'example');
const HOST = process.env.MONGO_DB_HOST || 'mongo';
const PORT = process.env.MONGO_DB_PORT || '27017';
const URL = `mongodb://${USER}:${PASS}@${HOST}:${PORT}`;
const DB_NAME = 'todos';

let client: mongodb.MongoClient;

export const connect = async () => {
  if (!client || !client.isConnected()) {
    client = await mongodb.connect(URL, { useNewUrlParser: true });
    console.info('Connected correctly to mongodb');
  }
  return client.db(DB_NAME);
};

export const close = () => {
  if (client && client.isConnected()) {
    client.close();
  }
};

export const getCollection = async (name: string) => {
  const db = await connect();
  return db.collection(name);
};
