import express from 'express';
import cors from 'cors';

import router from './routes.js';

const app = express();

app.use(cors());

app.set('view engine', 'ejs');

app.use(express.json());

app.use(router);

app.use(express.static('./public'));

app.use((err, req, res, next) => {
  console.error(err);
  res.statusCode = 400;
  res.statusMessage = 'Bad Request';
  res.setHeader('Content-Type', 'text/html');
  res.render('error');
});

app.use('*', (req, res) => {
  res.statusCode = 404;
  res.statusMessage = 'Not Found';
  res.setHeader('Content-Type', 'text/html');
  res.render('404');
});

module.exports = {
  app: app,
  start: (PORT) => {
    app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
  },
};
