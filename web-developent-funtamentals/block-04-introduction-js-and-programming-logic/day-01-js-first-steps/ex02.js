/* Faça um programa que retorne o maior de dois números. Defina no começo do programa duas constantes com os valores que serão comparados. */

const NUM1 = 87;
const NUM2 = 32;

function biggeSmaller(num1, num2) {
  if (num1 > num2) {
    return console.log(`O maior número é: ${num1}`);
  } else {
    return console.log(`O maior número é: ${num2}`);
  }
}

biggeSmaller(NUM1, NUM2);
