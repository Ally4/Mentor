/* eslint-disable linebreak-style */
/* eslint-disable no-console */
import express from 'express';
import bodyParser from 'body-parser';
// import router from './server/router/router';
import mentor from './server/router/mentor';
import user from './server/router/user';
import admin from './server/router/admin';

const app = express();

app.use(express.json());

app.use(bodyParser.json());

// app.use('/', router);
app.use('/', mentor);
app.use('/', user);
app.use('/', admin);

const port = process.env.PORT || 4404;

app.listen(port, () => {
  console.log(`The server is running on ${port}`);
});

module.exports = app;
