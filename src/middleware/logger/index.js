const express = require('express');

const app = express();

const myLogger = (req, res, next) => {
  const msg = (`Дата и время запроса - ${Date()}, метод - ${req.method}, запрос в "${req.path}".`);
  console.log(msg);
  next();
};

app.use(myLogger);
