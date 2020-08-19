// eslint-disable-next-line no-unused-vars
import { Request, Response, NextFunction } from 'express';

function logger(req: Request, res: Response, next: NextFunction): void {
  const msg: string = (`Дата и время запроса - ${Date()}, метод - ${req.method}, запрос в "${req.path}".`);
  console.log(msg);
  next();
}

export default logger;
