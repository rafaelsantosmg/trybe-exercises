/* Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele retorna false . */

const NUM1 = 8
const NUM2 = 6
const NUM3 = 11

if (NUM1 % 2 !== 0 || NUM2 % 2 !== 0 || NUM3 % 2 !== 0) {
  console.log(true)
} else {
  console.log(false)
}
