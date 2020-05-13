const express = require('express');
const config = require('config');
const dotenv = require('dotenv');
const middlewares = require('./middleware');
const router = require('./router');

const app = express();
dotenv.config();
const PORT = config.get('port') || process.env.PORT || 3000;

console.log(process.env.PORT);

app.use(middlewares.logger.logger);
app.use(router);

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
