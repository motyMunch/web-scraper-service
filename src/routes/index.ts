import express from 'express';
import { rateLimiter } from '@src/middleware/rateLimiter';
import { ROUTES } from '@src/constants/router';
import { routeWrapper } from '@src/utils/routeWrapper';
import scrape from './scrape';

const router = express.Router();

router.use(ROUTES.SCRAPE, rateLimiter, routeWrapper(scrape));

export default router;
