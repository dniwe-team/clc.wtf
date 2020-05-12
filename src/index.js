const express = require('express');
const router = require('./router');

const app = express();

const myLogger = (req, res, next) => {
  const msg = (`Дата и время запроса - ${Date()}, метод - ${req.method}, запрос в "${req.path}".`);
  console.log(msg);
  next();
};

app.use(myLogger);

app.use('/', router);

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});
