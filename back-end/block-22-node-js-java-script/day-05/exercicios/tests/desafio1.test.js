const { expect } = require('chai');
const sinon = require('sinon');
const axios = require('axios');

const pingMiddleware = require('../middlewares/ping');

describe('Ao fazer uma requisição para rota /ping', () => {
  const request = {};
  const response = {};

  before(() => {
    response.status = sinon.stub().returns(response);
    response.send = sinon.stub().returns();
  });

  it('deve chamar a função status com o status igual a 200', () => {
    pingMiddleware(request, response);

    expect(response.status.calledWith(200)).to.be.equal(true);
  });

  it('deve chamar a função send com a mensagem "pong"', () => {
    pingMiddleware(request, response);

    expect(response.send.calledWith('pong!')).to.be.equal(true);
  });

  // teste de integração
  it('ao fazer a requisição para rota /ping deve retornar a mensagem', async () => {
    const response = await axios.get('http://localhost:3000/ping').then(response => (response.data));

    expect(response).to.be.equal('pong!');
  });


})