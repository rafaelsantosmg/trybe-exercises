const { rectangleArea , arraySum, personLikes, filterPeople } = require('./exercises');

const alex = {
  name: 'Alex',
  age: 26,
  likes: ['fly fishing'],
  nationality: 'Australian',
};

const gunnar = {
  name: 'Gunnar',
  age: 30,
  likes: ['hiking', 'scuba diving', 'taking pictures'],
  nationality: 'Icelandic',
};

describe('Testa todas as funções do exercícios 8.5', () => {
  it('Testa o exercício 1', () => {
    expect(rectangleArea(1,2)).toEqual(2);
    expect(rectangleArea(3,5)).toEqual(15);
    expect(rectangleArea(6,9)).toEqual(54);
  });
  it('Testa o exercício 2', () => {
    expect(arraySum(2, 5, 10, 3, 6, 4)).toBe(30);
    expect(arraySum(2, 5, 10, 3)).toBe(20);
    expect(arraySum(3, 6, 4)).toBe(13);
  });
  it('Testa o exercício 3', () => {
    expect(personLikes(alex)).toBe('Alex is 26 years old and likes fly fishing.');
    expect(personLikes(gunnar)).toBe('Gunnar is 30 years old and likes hiking, scuba diving, taking pictures.');
  });
  it('Testa o exercício 4', () => {
    expect(filterPeople()).toBe('');
  });
});
