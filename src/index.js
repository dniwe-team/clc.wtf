const express = require('express');
const middlewares = require('./middleware');
const router = require('./router');

const app = express();

app.use(middlewares.logger.logger);
app.use(router);

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});
