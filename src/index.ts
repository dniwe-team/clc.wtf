import express from 'express';
import config from 'config';
import middlewares from './middleware';
import router from './router';

const app = express();
const PORT = process.env.PORT || config.get('port');

app.use(express.static(`${__dirname}/public`));

app.use(express.json());
app.use(middlewares.logger);
app.use(router);

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
