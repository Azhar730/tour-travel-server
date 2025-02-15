import { NextFunction, Request, Response } from 'express';
import { handleZodError } from '../helpers/handleZodError';
import { Error } from 'mongoose';
import { handleCastError } from '../helpers/handleCastError';
import { handleValidationError } from '../helpers/handleValidationError';
import { handleDuplicateError } from '../helpers/handleDuplicateError';
import { handleGenericError } from '../helpers/handleGenericError';

export const globalErrorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  if (err && err.name === 'ZodError') {
    handleZodError(err, res);
  } else if (err instanceof Error.CastError) {
    handleCastError(err, res);
  } else if (err instanceof Error.ValidationError) {
    handleValidationError(err, res);
  } else if (err.code && err.code === 11000) {
    handleDuplicateError(err, res);
  } else if (err instanceof Error) {
    handleGenericError(err, res);
  }
};
