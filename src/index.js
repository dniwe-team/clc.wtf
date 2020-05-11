const express = require('express');

const app = express();


const myLogger = (req, res, next) => {
  const msg = (`Дата и время запроса - ${Date()}, метод - ${req.method}, запрос в "${req.path}".`);
  console.log(msg);
  next();
};

app.use(myLogger);

app.get('/', (req, res) => {
  res.send('Got GET request and send you "Hello, world"');
});

app.post('/', (req, res) => {
  res.send('Got POST request and send you "Hello, world"');
});

app.get('/about', (req, res) => {
  res.send('Got GET request and send you "It\'s about"');
});

app.post('/', (req, res) => {
  res.send('Got POST request and send you "It\'s about"');
});

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});
