/* Faça um programa que, dado um valor definido numa constante, retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero" caso contrário. */

const NUMBER = 0;

function positiveNegative(number) {
  let result;

  if (number > 0) {
    result = "Positivo";
  } else if (number < 0) {
    result = "Negativo";
  } else {
    result = "Zero";
  }
  return console.log(result);
}

positiveNegative(NUMBER);
