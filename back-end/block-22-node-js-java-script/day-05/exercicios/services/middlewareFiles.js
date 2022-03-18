const fs = require('fs')

const readFile = (file) => {
  try {
    const fileContent = fs.readFileSync(file);
    const data = JSON.parse(fileContent);
    return data;
   } catch (err) {
     console.error(err.message);
   }
}

const writeFile = (file, data) => {
  try {
    fs.writeFileSync(file, JSON.stringify(data));
    console.log('Arquivo escrito com sucesso!');
  } catch (err) {
    console.error(`Erro ao escrever o arquivo: ${err.message}`);
  }
}

module.exports = { readFile, writeFile };