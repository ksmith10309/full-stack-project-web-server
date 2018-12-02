import express from 'express';

import content from './public/content/content.json';

const router = new express.Router();

router.get('/', (req, res) => {
  res.statusCode = 200;
  res.statusMessage = 'OK';
  res.setHeader('Content-Type', 'text/html');
  res.end('Server Home');
});

router.get('/content', (req, res) => {
  res.statusCode = 200;
  res.statusMessage = 'OK';
  res.setHeader('Content-Type', 'application/json');
  res.json(content);
});

export default router;
