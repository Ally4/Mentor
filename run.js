/* eslint-disable linebreak-style */
/* eslint-disable no-console */
import express from 'express';
import bodyParser from 'body-parser';
import swaggerUi from 'swagger-ui-express';
import mentor from './server/router/mentor';
import user from './server/router/user';
import admin from './server/router/admin';
import swaggerDocument from './swagger.json';

const app = express();

app.use(express.json());

app.use(bodyParser.json());


app.use('/', mentor);
app.use('/', user);
app.use('/', admin);

app.use('api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

const port = process.env.PORT || 4404;

app.listen(port, () => {
  console.log(`The server is running on ${port}`);
});

module.exports = app;
