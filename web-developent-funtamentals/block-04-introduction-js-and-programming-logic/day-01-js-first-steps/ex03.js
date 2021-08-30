/* Faça um programa que retorne o maior de três números. Defina no começo do programa três constantes com os valores que serão comparados. */

const NUM1 = 42;
const NUM2 = 50;
const NUM3 = 41;

function biggeSmaller(num1, num2, num3) {
  let result;

  if (num1 > num2 && num1 > num3) {
    result = num1
  } else if (num2 > num3) {
    result = num2
  } else {
    result = num3
  }
  return console.log(`O maior número é: ${result}`)
}

biggeSmaller(NUM1, NUM2, NUM3);
