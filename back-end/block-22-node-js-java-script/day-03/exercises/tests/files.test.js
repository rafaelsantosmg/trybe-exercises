const fs = require('fs');
const sinon = require('sinon');
const { expect } = require('chai');

const writeFile = require('../services/writeFile');

describe('Executa a função "writeFile"', () => {
  before(() => {
    sinon.stub(fs, 'writeFileSync');
  });

  after(() => {
    fs.writeFileSync.restore();
  });

  it('1 - Testa se a resposta é uma "string"', () => {
    const resposta = writeFile('./file.txt', 'Hello World');

    expect(resposta).to.be.a('string');
  });

  it('2 - Verifica se o retorno é igual a "ok"', () => {
    const resposta = writeFile('./file.txt', 'Hello World');

    expect(resposta).to.be.equals('ok');
  });
});