/* Faça um programa que defina três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false , caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro. */

const ANGULO1 = 40;
const ANGULO2 = 60;
const ANGULO3 = 10;

function triangleAngle(angulo1, angulo2, angulo3) {

  if (angulo1 + angulo2 + angulo3 === 180) {
    return console.log(true);
  } else if (angulo1 <= 0 || angulo2 <= 0 || angulo3 <= 0) {
    return console.log(`ERRO! Ângulo inválido!`);
  } else {
    return console.log(false);
  }
}

triangleAngle(ANGULO1, ANGULO2, ANGULO3);
