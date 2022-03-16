const { expect } = require('chai');

const { readFile } = require('../services/files');

describe('Chama a função "readFile', () => {
  describe('quando o arquivo é lido com sucesso', () => {
    describe('a resposta', () => {
      it('é igual a "null"', async () => {
        const response = await readFile('arquivo.txt');
        expect(response).to.be.null;
      });
    });
  });
});