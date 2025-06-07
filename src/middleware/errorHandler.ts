import { createLogger } from '@src/utils/log';
import { handleResponse } from '@src/utils/responseHelpers';
import { Request, Response, NextFunction, ErrorRequestHandler } from 'express';
import { StatusCodes } from 'http-status-codes';
const logger = createLogger('errorHandler');

export const errorHandler: ErrorRequestHandler = (
  err: unknown,
  _req: Request,
  res: Response,
  _next: NextFunction
): void => {
  logger.error('Unhandled error:', err);
  handleResponse(
    res,
    StatusCodes.INTERNAL_SERVER_ERROR,
    err instanceof Error ? err.message : 'Unknown error occurred'
  );
};
