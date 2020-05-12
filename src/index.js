const express = require('express');
const middleware = require('./middleware');
const router = require('./router');

const app = express();

app.use(middleware);
app.use(router);

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});
