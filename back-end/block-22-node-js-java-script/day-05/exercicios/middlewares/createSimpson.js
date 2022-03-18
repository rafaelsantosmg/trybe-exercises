const { readFile, writeFile } = require('../services/middlewareFiles');

module.exports = (req, res) => {
  const { id, name } = req.body;
  const simpsons = readFile('./simpsons.json');
  simpsons.push({ id, name });
  writeFile('./simpsons.json', simpsons);
  return res.status(201).json({ message: 'Simpson criado com sucesso!' });
}