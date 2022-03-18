const fs = require('fs');
const { readFile } = require('../services/middlewareFiles');

module.exports = (req, res) => {
  const { id } = req.params;
  const simpsons = readFile('./simpsons.json');
  const findSimpson = simpsons.find((simpson) => parseInt(simpson.id) === parseInt(id));
  if (!findSimpson) return res.status(404).json({ message: 'Simpson not found!'});
  return res.status(200).json(findSimpson);
}