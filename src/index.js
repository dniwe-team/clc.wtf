const express = require('express');
const config = require('config');
const middlewares = require('./middleware');
const router = require('./router');
const bodyParser = require('body-parser')

const app = express();

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());


const PORT = process.env.PORT || config.get('port');
app.use(express.bodyParser());
app.use(middlewares.logger);
app.use(router);

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
