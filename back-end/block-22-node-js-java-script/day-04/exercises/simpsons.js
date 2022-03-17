const express = require('express');
const fs = require('fs');
const simpsons = require('./simpsons.json');

const app = express();

app.use(express.json());

app.get('/simpsons', (req, res) => {
  return res.status(200).json(simpsons)
});

app.get('/simpsons/:id', (req, res) => {
  const { id } = req.params;
  const simpsonFind = simpsons.find((simpson) => simpson.id === id);
  if (!simpsonFind) return res.status(404).json({ message: 'simpson not found'});
  return res.status(200).json(simpsonFind);
});

app.post('/simpsons', (req, res) => {
  const { id, name } = req.body;
  const existId = simpsons.some((simpson) => Number(simpson.id) === Number(id));
  if (existId) return res.status(409).json({ message: 'id already exists'});
  simpsons.push({ id, name });
  fs.writeFileSync('./simpsons.json', JSON.stringify(simpsons));
  return res.status(204).end();
});

app.listen('3000', () => {
  console.log('Aplicação ouvindo na porta 3000');
});