const express = require('express');
const config = require('config');
const middlewares = require('./middleware');
const router = require('./router');

const app = express();

const PORT = config.get('port');
console.log(config.util.getEnv('port'));

app.use(middlewares.logger);
app.use(router);

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
