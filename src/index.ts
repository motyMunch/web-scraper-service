import express from 'express';
import routes from './routes';
import { errorHandler } from './middleware/errorHandler';

const app = express();
app.use(express.json());
app.use(routes);
app.use(errorHandler);

app.get('/health', (_, res) => {
  res.json({ status: 'ok' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Web scraper service running on port ${PORT}`);
});
