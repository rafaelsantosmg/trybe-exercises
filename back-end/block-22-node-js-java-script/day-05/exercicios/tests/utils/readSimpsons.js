const fs = require('fs').promises;

const readSimpsons = async () => {
  return await fs.readFile('./simpsons.json', 'utf-8').then((content) => JSON.parse(content))
};

const readSimpsonsBackup = async () => {
  return await fs.readFile('./tests/simpsons-backup.json', 'utf-8').then((content) => JSON.parse(content))
}

module.exports = {
  readSimpsons,
  readSimpsonsBackup
}