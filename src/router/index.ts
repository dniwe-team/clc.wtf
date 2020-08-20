import express from 'express';
import path from 'path';

import reducer from '../controllers/reducer';

const router = express.Router();


router.get('/', (req, res) => {
  res.sendfile(path.resolve('src/index.html'));
});

router.post('/reducer', (req, res) => {
  res.send(reducer(req.body.link));
});

router.post('/', (req, res) => {
  res.send('Got POST request and send you "Hello, world"');
});

router.get('/about', (req, res) => {
  res.send('Got GET request and send you "It\'s about"');
});

router.post('/about', (req, res) => {
  res.send('Got POST request and send you "It\'s about"');
});

export default router;
