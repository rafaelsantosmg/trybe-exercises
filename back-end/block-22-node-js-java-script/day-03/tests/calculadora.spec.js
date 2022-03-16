const { expect } = require('chai');

const { sum } = require('../calculadora');
 
describe('Testar sum no soma', () => {
  it('a resposta está correta para valores positivos', () => {
    const res = sum(2, 4);
    expect(res).to.be.equal(6);
  })
  
  it('a resposta está correta quando existem valores negativos', () => {
    const res = sum(-4, 2);
    expect(res).to.be.equal(-2)
  });
});

describe('Testar calculadora na divisão', () => {
});