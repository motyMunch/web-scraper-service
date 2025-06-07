import { Router } from 'express';
import { routeWrapper } from '@src/utils/routeWrapper';
import { scrapeURL } from '@src/controllers/scrape';

const router = Router();

router.post('/', routeWrapper(scrapeURL));

export default router;
