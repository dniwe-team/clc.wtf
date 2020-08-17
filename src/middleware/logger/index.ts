import { request, response } from 'express';

function logger(req: typeof request, res: typeof response, next: typeof next): void {
  const msg: string = (`Дата и время запроса - ${Date()}, метод - ${req.method}, запрос в "${req.path}".`);
  console.log(msg);
  next();
}

export default logger;
