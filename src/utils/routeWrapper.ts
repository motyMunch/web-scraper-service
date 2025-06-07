import express from 'express';

export const routeWrapper =
  (fn: Function) =>
  async (req: express.Request, res: express.Response, next: express.NextFunction) => {
    try {
      await fn(req, res, next);
    } catch (e) {
      next(e);
    }
  };
