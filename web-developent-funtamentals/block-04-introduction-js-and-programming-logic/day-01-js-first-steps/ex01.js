/* Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas constantes, a e b , definidas no começo com os valores que serão operados. Faça programas para:

Adição (a + b)
Subtração (a - b)
Multiplicação (a * b)
Divisão (a / b)
Módulo (a % b) */


let a = 10;
let b = 7;
let operador = '/'

function operatorAritimetic(num1, num2, opr) {
  let result;
  switch (opr) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    case '/':
      result = (num1 / num2).toFixed(2);
      break;
    default:
      result = 'ERRO! Operador inválido!'
      break;
  }
  return console.log(result);
}

operatorAritimetic(a, b, operador);
