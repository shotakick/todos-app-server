import { app } from './app';

// TODO HTTPS対応

const PORT = process.env.PORT || '3000';

app.listen(PORT, () => console.info(`API running on localhost:${PORT}`));
