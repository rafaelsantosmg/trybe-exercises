/* Faça um programa que retorne o maior de três números. Defina no começo do programa três constantes com os valores que serão comparados. */

const NUM1 = 42;
const NUM2 = 40;
const NUM3 = 41;

if (NUM1 > NUM2 && NUM1 > NUM3) {
  console.log("O maior número é: 'NUM1'", NUM1)
} else if (NUM2 > NUM3) {
  console.log("O maior número é: 'NUM2'", NUM2)
} else {
  console.log("O maior número é: 'NUM3'", NUM3)
}
