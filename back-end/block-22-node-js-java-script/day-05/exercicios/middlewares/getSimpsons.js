const { readFile } = require('../services/middlewareFiles');

module.exports = (req, res) => {
  const simpsons = readFile('./simpsons.json');
  return res.status(200).json(simpsons);
};