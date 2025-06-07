import { scrapeWebsite } from '@src/services/scraper';
import { handleResponse } from '@src/utils/responseHelpers';
import { isValidHttpUrl } from '@src/utils/url';
import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

export const scrapeURL = async (req: Request, res: Response) => {
  const url = req?.body?.url;

  if (!url || !isValidHttpUrl(url)) {
    return handleResponse(res, StatusCodes.BAD_REQUEST, { error: 'Invalid or missing URL' });
  }

  try {
    const summary = await scrapeWebsite(url);
    return handleResponse(res, StatusCodes.OK, summary);
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unexpected error';
    return handleResponse(res, StatusCodes.INTERNAL_SERVER_ERROR, message);
  }
};
