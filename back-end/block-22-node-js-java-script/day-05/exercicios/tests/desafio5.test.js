const { expect } = require('chai');
const sinon = require('sinon');
const axios = require('axios');
const fs = require('fs').promises;

const getSimpsonByIdMiddleware = require('../middlewares/getSimpsonById');

describe('Ao fazer uma requisição GET /simpsons/:id', () => {
  const request = {};
  const response = {};

  const expectedSimpson = {
    "id": 9,
    "name": "Krusty"
  }

  describe('Chamando com um id que existe', () => {
    before(async () => { 
      request.params = { id: 9 };
      response.status = sinon.stub().returns(response);
      response.json = sinon.stub().returns();
    });
    
    it('deve chamar a função status com o status igual a 200', async () => {
      await getSimpsonByIdMiddleware(request, response);
  
      expect(response.status.calledWith(200)).to.be.equal(true);
    });
  
    it('deve retornar o objeto equivalente ao id 9"', async () => {
      await getSimpsonByIdMiddleware(request, response);
  
      expect(response.json.calledWith(expectedSimpson)).to.be.equal(true);
    });

    it('ao fazer a requisição para rota GET /simpsons/:id deve retornar o json com um simpson', async () => {
      const response = await axios.get('http://localhost:3000/simpsons/9');

      expect(response.status).to.be.eq(200);

      expect(response.data).to.be.deep.equal(expectedSimpson);
    })
  });

  describe('Chamando com um id que não existe', () => {
    const expectedResponse = {message: "Simpson not found!" };

    before(async () => { 
      request.params = { id: 999 };
      response.status = sinon.stub().returns(response);
      response.json = sinon.stub().returns();
    });
    
    it('deve chamar a função status com o status igual a 404', async () => {
      await getSimpsonByIdMiddleware(request, response);
  
      expect(response.status.calledWith(404)).to.be.equal(true);
    });
  
    it('deve chamar a função json com `{message: "Simpson not found!" }`', async () => {
      await getSimpsonByIdMiddleware(request, response);
  
      expect(response.json.calledWith(expectedResponse)).to.be.equal(true);
    });

    it('ao fazer a requisição para rota GET /simpsons/:id deve retornar um erro', async () => {
      const response = await axios.get('http://localhost:3000/simpsons/999')
        .catch((err) => (err.response));

      expect(response.status).to.be.eq(404);

      expect(response.data).to.be.deep.equal(expectedResponse);
    })
  })

  

  
  
})