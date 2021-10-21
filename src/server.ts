import express from 'express';

const app = express();

app.get('/users', (request, response) => {
  return response.send('Olá NLW TOGETHER');
});

app.post('/banco', (request, response) => {
  return response.send('Olá metodo post');
});

app.listen(3333, function () {
  return console.log('Server is running on port 3333 🚀🚀🚀!');
});
