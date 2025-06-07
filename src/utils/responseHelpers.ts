import { Response } from 'express';
import { getReasonPhrase, StatusCodes } from 'http-status-codes';

type Payload = Record<string, unknown> | string | null;

export const handleResponse = (
  res: Response,
  status: StatusCodes,
  data: Payload = null
): Response => {
  if (res.headersSent) return res;

  const isSuccess = status >= 200 && status < 300;

  const body = isSuccess
    ? { status: getReasonPhrase(status), data }
    : {
        status: getReasonPhrase(status),
        error:
          typeof data === 'string'
            ? { message: data }
            : { message: 'Internal error', details: stringifySafe(data) },
      };

  return res.status(status).json(body);
};

function stringifySafe(data: unknown): string {
  try {
    return JSON.stringify(data);
  } catch {
    return '[Unserializable error object]';
  }
}
