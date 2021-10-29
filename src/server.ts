import 'reflect-metadata';
import express from 'express';

import { router } from './routes';

import './database';

const app = express();

// Abilitando a aplicação para trabalhar com json
app.use(express.json());

app.use(router);

app.listen(3333, function () {
  return console.log('Server is running on port 3333 🚀🚀🚀!');
});
