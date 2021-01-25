import { Request, Response, NextFunction } from 'express';
import { HttpException } from './httpException';

export const errorHandler = (
  err: HttpException,
  req: Request,
  res: Response,
  next: NextFunction,
): void => {
  if (res.headersSent) {
    return next(err);
  }

  res.status(err.status).json({
    error: {
      message: err.message,
      status: err.status,
      stack: err.stack,
    },
  });
};
