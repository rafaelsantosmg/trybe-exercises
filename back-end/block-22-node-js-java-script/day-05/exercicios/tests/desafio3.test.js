const { expect } = require('chai');
const sinon = require('sinon');
const axios = require('axios');

const greetingMiddleware = require('../middlewares/greeting');

describe('Ao fazer uma requisição POST /greetings', () => {
  const request = {};
  const response = {};

  describe('Com um usuário com idade maior que 18 anos', () => {
    const DATA = { "name": "John Cena", "age": 50 }
    const EXPECTED_MESSAGE = `Hello, John Cena!`;
  
    before(() => {
      request.body = DATA;
  
      response.status = sinon.stub().returns(response);
      response.json = sinon.stub().returns();
    });
  
    it('deve chamar a função status com o status igual a 200', () => {
      greetingMiddleware(request, response);
  
      expect(response.status.calledWith(200)).to.be.equal(true);
    });
  
    it('deve retornar a messagem "Hello, John Cena!"', () => {
      greetingMiddleware(request, response);
  
      expect(response.json.calledWith({"message": EXPECTED_MESSAGE})).to.be.equal(true);
    });

    it('ao fazer a requisição para rota POST /greeting deve retornar a mensagem esperada', async () => {
      const response = await axios.post('http://localhost:3000/greeting', DATA)
      
      expect(response.status).to.be.eq(200);
  
      expect(response.data).to.be.deep.equal({ message: EXPECTED_MESSAGE});
    });
  });

  describe('Com um usuário com idade menor que 18 anos', () => {
    const DATA = { "name": "Tom Holland", "age": 16 }
    const EXPECTED_RESPONSE = { "message": "Unauthorized" };
  
    before(() => {
      request.body = DATA;
  
      response.status = sinon.stub().returns(response);
      response.json = sinon.stub().returns();
    });
  
    it('deve chamar a função status com o status igual a 401', () => {
      greetingMiddleware(request, response);
  
      expect(response.status.calledWith(401)).to.be.equal(true);
    });
  
    it('deve retornar a messagem "Hello, John Cena!"', () => {
      greetingMiddleware(request, response);
  
      expect(response.json.calledWith(EXPECTED_RESPONSE)).to.be.equal(true);
    });

    it('ao fazer a requisição para rota POST /greeting deve retornar a mensagem esperada', async () => {
      const response = await axios.post('http://localhost:3000/greeting', DATA)
      .then(response => (response.data))
      .catch(err => err.response);

      expect(response.status).to.eq(401);
      expect(response.data.message).to.be.deep.equal("Unauthorized");
    });
  });
  
})