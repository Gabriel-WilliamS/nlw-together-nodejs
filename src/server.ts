import express from 'express';

// #types/express
const app = express();

// http://localhost:3000
app.listen(3000, () => console.log('Server is running'));

/**
 * GET      => Buscar uma informação.
 * POST     => Inserir (Crirar) uma Informação.
 * PUT      => Alterar uma informação.
 * DELETE   => Remover um dado.
 * PATCH    => Alterar uma informação especifica.
 */

app.get('/test', (request, response) => {
  // Request      => Entrando
  // Response     => Saindo

  return response.send('Olá NLW get');
});

app.post('/test-post', (request, response) => {
  return response.send('Olá NLW Post');
});
