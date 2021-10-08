// 5 - Dada o array de nomes, retorne a quantidade de vezes em que aparecem a letra a maiúscula ou minúscula. 
const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];


function containsA() {
  // escreva seu código aqui
  return names.reduce((acc, currentValue) => acc + currentValue.toLowerCase().split('').reduce((acc2, currentValue2) => currentValue2 === 'a' ? acc2 + 1 : acc2, 0), 0);
}

console.log(containsA());
