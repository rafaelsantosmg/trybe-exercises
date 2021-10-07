/* Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array; */

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let media, total = 0

for (let i = 0; i < numbers.length; i += 1) {
  total += numbers[i]
}

media = total / numbers.length

console.log(`A média de "Numbers" é ${media}`)
