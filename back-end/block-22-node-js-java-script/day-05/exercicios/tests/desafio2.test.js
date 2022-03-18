const { expect } = require('chai');
const sinon = require('sinon');
const axios = require('axios');

const helloMiddleware = require('../middlewares/hello');

describe('Ao fazer uma requisição POST /hello', () => {
  const request = {};
  const response = {};

  const DATA = { name: "Xablau" };
  const EXPECTED_MESSAGE = `Hello, Xablau!`;

  before(() => {
    request.body = DATA;

    response.status = sinon.stub().returns(response);
    response.json = sinon.stub().returns();
  });

  it('deve chamar a função status com o status igual a 201', () => {
    helloMiddleware(request, response);

    expect(response.status.calledWith(201)).to.be.equal(true);
  });

  it('deve retornar a messagem "Hello, Xablau!"', () => {
    helloMiddleware(request, response);

    expect(response.json.calledWith({"message": EXPECTED_MESSAGE})).to.be.equal(true);
  });

  // teste de integração
  it('ao fazer a requisição para rota POST /hello deve retornar a mensagem espearada', async () => {
    const response = await axios.post('http://localhost:3000/hello', 
      { name: "Xablau"}
    );
    

    expect(response.status).to.be.eq(201);

    expect(response.data).to.be.deep.equal({ message: EXPECTED_MESSAGE});
  });

})