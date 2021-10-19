// githubApi.test.js
const fetch = require('node-fetch');

const getRepos = (url) => (
  fetch(url)
    .then((response) => response.json())
    .then((data) => data.map((repo) => repo.name))
);

// implemente seus testes aqui
it('Verifica se o repositório de projeto Trybe Existe', async () => {
  const url = 'https://api.github.com/orgs/tryber/repos';
  const toDoList = 'sd-01-week4-5-project-todo-list';
  const memegenerator = 'sd-01-week4-5-project-meme-generator';
  const result = await getRepos(url);
  expect.assertions(2)
  expect(result).toContain(toDoList);
  expect(result).toContain(memegenerator);
});

beforeEach(() => console.log('1 - beforeEach'));
afterEach(() => console.log('1 - afterEach'));

test('', () => console.log('1 - test'));

describe('Scoped / Nested block', () => {
  beforeEach(() => console.log('2 - beforeEach'));
  afterEach(() => console.log('2 - afterEach'));

  test('', () => console.log('2 - test'));
});