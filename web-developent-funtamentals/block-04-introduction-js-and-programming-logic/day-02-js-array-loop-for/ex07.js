/* Utilizando for , descubra qual o menor valor contido no array e imprima-o; */

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let menor = numbers[0]
let sort = []
let index = 0

for (c = 0; c < numbers.length; c++) {
  for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] < menor) {
      menor = numbers[i]
      index = i
    }
  }
  sort.push(menor)
  menor = numbers[0]
  numbers.splice(index, 1)
}

console.log(sort)