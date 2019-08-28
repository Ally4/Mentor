/* eslint-disable linebreak-style */
/* eslint-disable no-console */
import express from 'express';
import bodyParser from 'body-parser';
import router from './server/router/router';

const app = express();

app.use(express.json());

app.use(bodyParser.json());

app.use('/', router);

const port = process.env.PORT || 4444;

app.listen(port, () => {
  console.log(`The server is running on ${port}`);
});

export default app;
