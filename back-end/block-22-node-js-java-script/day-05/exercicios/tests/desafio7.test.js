const { expect } = require('chai');
const sinon = require('sinon');
const axios = require('axios');

const validateIdSimpsonMiddleware = require('../middlewares/validateIdSimpson');

describe('Ao fazer uma requisição POST /simpsons', () => {
  const request = {};
  const response = {};
  const next = sinon.stub();
  
  
  describe('Ao tentar salvar um simpson com um id que já existe', () => {
    const expectedMessage = 'Não é possível cadastrar esse simpson!';
    const invalidSimpson = { id: 1, name: 'Joe Quimby' }

    before(() => { 
      request.body = invalidSimpson;
      response.status = sinon.stub().returns(response);
      response.json = sinon.stub().returns();
    });
    
    it ('deve chamar a função status com o valor `500`', async () => {
      await validateIdSimpsonMiddleware(request, response, next);
      
      expect(response.status.calledWith(500)).to.be.equal(true);
    });
    
    it ('deve chamar retornar uma mensagem "Não é possível cadastrar esse simpson!"', async() => {
      await validateIdSimpsonMiddleware(request, response, next);
      
      expect(response.json.calledWith({ message: expectedMessage })).to.be.equal(true);
    });

    it ('Ao fazer a requisição para POST /simpsons deve retornar o erro"', async() => {
      const response = await axios.post('http://localhost:3000/simpsons', invalidSimpson)
        .catch(err => (err.response));

      expect(response.status).to.be.eq(500);
      expect(response.data).to.be.deep.eq({ message: expectedMessage })
    });
  });
  
  describe('Ao tentar salvar um simpson com um id que não existe', () => {
    before(() => { 
      request.body = { id: 12, name: 'Joe Quimby' };
      response.status = sinon.stub().returns(response);
      response.json = sinon.stub().returns();
    });
    
    it ('deve chamar a função next do express', async () => {
      await validateIdSimpsonMiddleware(request, response, next);
      
      expect(next.called).to.be.equal(true);
    });
  });
})