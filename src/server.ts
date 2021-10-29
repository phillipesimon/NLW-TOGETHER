import 'reflect-metadata';
import express, { NextFunction, Request, Response } from 'express';
import 'express-async-errors';

import { router } from './routes';

import './database';

const app = express();

// Abilitando a aplicação para trabalhar com json
app.use(express.json());

app.use(router);

// Middlewares para tratar os erros(deve conter 4 parametros) sempre depois das rotas
app.use(
  (err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof Error) {
      return response.status(400).json({
        error: err.message,
      });
    }

    return response.status(500).json({
      status: 'error',
      message: 'Internal server error!',
    });
  },
);

app.listen(3333, function () {
  return console.log('Server is running on port 3333 🚀🚀🚀!');
});
