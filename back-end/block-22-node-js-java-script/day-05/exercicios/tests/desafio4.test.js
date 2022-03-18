const { expect } = require('chai');
const sinon = require('sinon');
const axios = require('axios');
const { readSimpsons, readSimpsonsBackup } = require('./utils/readSimpsons');

const getSimpsonsMiddleware = require('../middlewares/getSimpsons');

describe('Ao fazer uma requisição GET /simpsons', () => {
  const request = {};
  const response = {};

  before(async () => {  
    response.status = sinon.stub().returns(response);
    response.json = sinon.stub().returns();
  })
  

  it('deve chamar a função status com o status igual a 200', async () => {
    await getSimpsonsMiddleware(request, response);

    expect(response.status.calledWith(200)).to.be.equal(true);
  });

  it('deve retornar o conteúdo do arquivo simpsons.json"', async () => {
    const simpsons = await readSimpsons();

    await getSimpsonsMiddleware(request, response);

    expect(response.json.calledWith(simpsons)).to.be.equal(true);
  });

  it('ao fazer a requisição para rota GET /simpsons deve retornar o json com a lista de simpsons', async () => {
    const response = await axios.get('http://localhost:3000/simpsons');

    const simpsons = await readSimpsonsBackup();
    
    expect(response.status).to.eq(200);
    expect(response.data).to.be.deep.equal(simpsons);
  });

  
  
})