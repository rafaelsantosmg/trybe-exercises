const express = require('express');
const generateToken = require('./generateToken');

const app = express();

app.use(express.json());

app.get('/validate', (req, res) => {
  const { authorization } = req.headers;
  if (!authorization || authorization.length !== 23) {
    return res.status(401).json({ message: 'Token Inválido!'});
  }
  return res.status(200).json({ message: 'Token Válido!'});
});

app.post('/signup', (req, res) => {
  const { email, password, firstName, phone } = req.body;
  if (!email || !password || !firstName || !phone) {
    return res.status(401).json({ message: 'missing fields'});
  }
  const token = generateToken();
  return res.status(200).json({ token });
});

app.listen('3000', () => {
  console.log('Aplication listen port 3000');
});