const { expect } = require('chai');
const sinon = require('sinon');
const axios = require('axios');

const { readSimpsons } = require('./utils/readSimpsons');
const resetFileSimpsons = require('./utils/resetFileSimpsons');

const createSimpsonMiddleware = require('../middlewares/createSimpson');

describe('Ao fazer uma requisição POST /simpsons', () => {
  const request = {};
  const response = {};
  const validSimpson = { id: 11, name: 'Ajudante de Papai Noel' };
  const expectedResponse = { message: 'Simpson criado com sucesso!'};

  describe('Ao passar um registro que ainda não existe', () => {
    before(() => { 
      request.body = validSimpson;
      response.status = sinon.stub().returns(response);
      response.json = sinon.stub().returns();
    });
  
    beforeEach(async () => {
      await resetFileSimpsons();
    });
    
  
    it('deve chamar a função status com o status igual a 201', async () => {
      await createSimpsonMiddleware(request, response);
  
      expect(response.status.calledWith(201)).to.be.equal(true);
    });
  
    it('deve retornar a mensagem "Simpson criado com sucesso!"', async () => {
      await createSimpsonMiddleware(request, response);
  
      expect(response.json.calledWith(expectedResponse)).to.be.equal(true);
    });
  
    it('O simpson cadastrado deve ser o último registro no arquivo simpsons.json', async () => {
      await createSimpsonMiddleware(request, response);
  
      const simpsons = await readSimpsons();
  
      const simpson = simpsons[simpsons.length -1];
  
      expect(simpson).to.deep.equal({ id: 11, name: 'Ajudante de Papai Noel' });
    });

    it('Ao fazer a requisição POST /simpsons deve retornar a mensagem de sucesso', async () => {
      const response = await axios.post('http://localhost:3000/simpsons', validSimpson);

      expect(response.status).to.be.eq(201);
      expect(response.data).to.be.deep.equals(expectedResponse);
    });
  });
})