import { Request, Resolve } from 'express';

function logger(req: typeof Request, res: typeof Resolve, next: typeof next): void {
  const msg: string = (`Дата и время запроса - ${Date()}, метод - ${req.method}, запрос в "${req.path}".`);
  console.log(msg);
  next();
}

export default logger;
