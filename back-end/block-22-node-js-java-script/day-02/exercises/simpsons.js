const fs = require('fs').promises;

const readFile = async (arquivo) => {
  try {
    const fileContent = await fs.readFile(arquivo);
    const fileSimpsons = JSON.parse(fileContent);
    return fileSimpsons;
   } catch (error) {
     console.error(error.message);
   }
}

const writeFile = async (arquivo, data) => {
  try {
    await fs.writeFile(arquivo, data);
    console.log('Arquivo escrito com sucesso!');
  } catch (error) {
    console.error(`Erro ao escrever o arquivo: ${error.message}`);
  }
}

const readSimpsons = async (file) => {
  try {
    const fileSimpsons = await readFile(file);
    fileSimpsons.forEach(({ id, name }) => console.log(`${id} - ${name}`));
    return fileSimpsons;
  } catch (error) {
    console.error(error.message);
  }
}

const findSimpson = async (file, id) => {
  const fileSimpsons = await readFile(file);
  const simpsonPromise = new Promise((resolve, reject) => {
    const findSimpson = fileSimpsons.find((simpson) => Number(simpson.id) === id);
    if (findSimpson === undefined) return reject(`\nnão foi encontrado esse Simpson`);
    resolve(findSimpson);
  });
  
  try {
    const { id, name } = await simpsonPromise;
    console.log(`\n${id} - ${name}`);
  } catch (error) {
    console.error(error);
  }

}

const changeSimpsons = async (file) => {
  try {
    const fileSimpsons = await readFile(file);
    const filterSimpsons = fileSimpsons.filter((simpson) => Number(simpson.id) !== 6
      && Number(simpson.id) !== 10);
    writeFile(file, JSON.stringify(filterSimpsons));
  } catch (error) {
    console.error(error.message);
  }
}

const newFileSimpsons = async (fileRead, fileWrite) => {
  try {
    const fileSimpsons = await readFile(fileRead);
    const filterSimpsons = fileSimpsons.filter((simpson) => Number(simpson.id) <= 4);
    writeFile(fileWrite, JSON.stringify(filterSimpsons));
  } catch (error) {
    console.error(error.message);
  }
}

const newSimpson = async (file, simpsons) => {
  try {
    const fileSimpsons = await readFile(file);
    fileSimpsons.push(simpsons);
    writeFile(file, JSON.stringify(fileSimpsons));
  } catch (error) {
    console.error(error.message);
  }
}

const replaceSimpson = async (file, simpsons) => {
  try {
    const fileSimpsons = await readFile(file);
    const indexSimpson = fileSimpsons.findIndex((simpson) => simpson.name === 'Nelson Muntz');
    fileSimpsons[indexSimpson] = simpsons;
    writeFile(file, JSON.stringify(fileSimpsons));
  } catch (error) {
    console.error(error.message);
  }
}

readSimpsons('./simpsons.json');
findSimpson('./simpsons.json', 1);
changeSimpsons('./simpsons.json');
newFileSimpsons('./simpsons.json', './simpsonFamily.json');
newSimpson('./simpsonFamily.json', { 'id': 5, 'name': 'Nelson Muntz'});
replaceSimpson('./simpsonFamily.json', { 'id': 5, 'name': 'Maggie Simpson'});
