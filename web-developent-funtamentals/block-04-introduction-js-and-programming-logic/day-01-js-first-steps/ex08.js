/* Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for par. Caso contrário, ele retorna false .
Bonus: use somente um if . */

const NUM1 = 7
const NUM2 = 13
const NUM3 = 17

if (NUM1 % 2 === 0 || NUM2 % 2 === 0 || NUM3 % 2 === 0) {
  console.log(true)
} else {
  console.log(false)
}
