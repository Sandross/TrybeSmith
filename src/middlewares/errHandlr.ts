import {
  ErrorRequestHandler, Response, Request, NextFunction,
} from 'express';
  
const ErrHndlr
// eslint-disable-next-line @typescript-eslint/no-unused-vars
: ErrorRequestHandler = (err, _req: Request, res: Response, _next: NextFunction): Response => res
  .status(err.status).json({ message: err.message });
  
export default ErrHndlr;