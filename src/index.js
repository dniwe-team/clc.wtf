const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Got GET request and send you "Hello, world"');
});

app.post('/', (req, res) => {
  res.send('Got POST request and send you "Hello, world"');
});

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});
