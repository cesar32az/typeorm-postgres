import { isNotEmpty, isNumber } from 'class-validator';
import { NextFunction, RequestHandler, Request, Response } from 'express';
import { HttpException } from '../exceptions';

export const isDefinedParam = (
  value: 'params' | 'body' = 'params',
  param: string = 'id',
  validateId: boolean = true,
): RequestHandler => (req: Request, res: Response, next: NextFunction) => {
  const paramValue = req[value][param];
  const exist: boolean = isNotEmpty(req[value][param]);
  let isValidNumber: boolean = false;

  if (validateId) {
    isValidNumber = isNumber(paramValue);
    if (!exist) {
      // if (!exist || !isValidNumber) {
      return next(
        new HttpException(400, `${value} is required and shoul be id number`),
      );
    }
  } else if (!exist)
    return next(new HttpException(400, `${value} is required`));
  next();
};
