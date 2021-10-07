const formatedBookNames = require('./exercise1');
const nameAndAge = require('./exercise2');
const fantasyOrScienceFiction = require('./exercise3');
const oldBooksOrdered = require('./exercise4');
const fantasyOrScienceFictionAuthors = require('./exercise5');
const oldBooks = require('./exercise6');
const {authorWith3DotsOnName} = require('./exercise7');

const expectedResultEx1 = [
  'As Crônicas de Gelo e Fogo - Fantasia - George R. R. Martin',
  'O Senhor dos Anéis - Fantasia - J. R. R. Tolkien',
  'Fundação - Ficção Científica - Isaac Asimov',
  'Duna - Ficção Científica - Frank Herbert',
  'A Coisa - Terror - Stephen King',
  'O Chamado de Cthulhu - Terror - H. P. Lovecraft',
];

const expectedResultEx2 = [
  {
    age: 31,
    author: 'Isaac Asimov',
  },
  {
    age: 38,
    author: 'H. P. Lovecraft',
  },
  {
    age: 39,
    author: 'Stephen King',
  },
  {
    age: 43,
    author: 'George R. R. Martin',
  },
  {
    age: 45,
    author: 'Frank Herbert',
  },
  {
    age: 62,
    author: 'J. R. R. Tolkien',
  },
];

const expectedResultEx3 = [
  { 
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: { name: 'George R. R. Martin', birthYear: 1948 },
    releaseYear: 1991
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: { name: 'J. R. R. Tolkien', birthYear: 1892 },
    releaseYear: 1954
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: { name: 'Isaac Asimov', birthYear: 1920 },
    releaseYear: 1951
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: { name: 'Frank Herbert', birthYear: 1920 },
    releaseYear: 1965
  }
];

const expectedResultEx4 = [
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: { name: 'H. P. Lovecraft', birthYear: 1890 },
    releaseYear: 1928,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: { name: 'Isaac Asimov', birthYear: 1920 },
    releaseYear: 1951,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: { name: 'J. R. R. Tolkien', birthYear: 1892 },
    releaseYear: 1954,
  },
];

const expectedResultEx5 = [
  'Frank Herbert',
  'George R. R. Martin',
  'Isaac Asimov',
  'J. R. R. Tolkien',
];

const expectedResultEx6 = [
  'O Senhor dos Anéis',
  'Fundação',
  'O Chamado de Cthulhu',
];

const expectedResultEx7 = 'O Senhor dos Anéis';

describe('Testa se as funções do exercícios 1 ao 7 estão válidos', () => {
  it('Valida funções formatedBookNames', () => {
    expect(formatedBookNames()).toEqual(expectedResultEx1);
  });
  it('Testa a função nameAndAge', () => {
    expect(nameAndAge()).toEqual(expectedResultEx2);
  });
  it('Testa a função FantasyOrScienceFiction', () => {
    expect(fantasyOrScienceFiction()).toEqual(expectedResultEx3);
  });
  it('Testa a função oldBooksOrdered', () => {
    expect(oldBooksOrdered()).toEqual(expectedResultEx4);
  });
  it('Testa a função fantasyOrScienceFictionAuthors', () => {
    expect(fantasyOrScienceFictionAuthors()).toEqual(expectedResultEx5);
  });
  it('Testa a função oldBooks', () => {
    expect(oldBooks()).toEqual(expectedResultEx6);
  });
  it('Testa a função authorWith3DotsOnName', () => {
    expect(authorWith3DotsOnName()).toEqual(expectedResultEx7);
  });
});
