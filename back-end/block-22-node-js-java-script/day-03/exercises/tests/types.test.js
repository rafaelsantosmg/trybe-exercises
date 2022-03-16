const { expect } = require('chai');

const convertForStrings = require('../services/convert.js');

describe('Testa se função retorna as string corretamente', () => {
  const POSITIVO = 'positivo';
  const NEGATIVO = 'negativo';
  const NEUTRO = 'neutro';

  it('1 - se resultado é maior que 0 exibe "positivo"', () => {
    const result = convertForStrings(4);
    expect(result).to.be.equal(POSITIVO);
  });

  it('2 - se resultado é menor que 0 exibe "negativo"', () => {
    const result = convertForStrings(-2);
    expect(result).to.be.equal(NEGATIVO);
  });

  it('3 - se resultado é igual que 0 exibe "neutro"', () => {
    const result = convertForStrings(0);
    expect(result).to.be.equal(NEUTRO);
  });
});

describe('Testa se tipo de dados foi passado corretamente para a função', () => {
  const STRING = 'string';
  const FOUR = 'four';
  const ERROR = 'o parâmetro deve ser um número';

  it('1 - se valor para passado para função é diferente de um número', () => {
    const result = convertForStrings(STRING);
    expect(result).to.be.a(STRING);
  });

  it('2 - se valor para passado para função for um string retorna um número', () => {
    const result = convertForStrings(FOUR);
    expect(result).to.be.equal(ERROR);
  });
});