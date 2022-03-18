const fs = require('fs').promises;

module.exports = async () => {
  const simpsons = await fs.readFile('./tests/simpsons-backup.json', 'utf-8');

  await fs.writeFile('./simpsons.json', simpsons);
}