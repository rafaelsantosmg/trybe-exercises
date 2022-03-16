const fs = require('fs');

const writeFile = (fileName, data) => {
  fs.writeFileSync(`./${fileName}`, data);
  return 'ok';
};

module.exports = writeFile;