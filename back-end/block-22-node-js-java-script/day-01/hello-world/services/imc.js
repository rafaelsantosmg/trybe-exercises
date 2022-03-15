const readline = require('readline-sync');

const data = {
  name: '',
  weight: 0,
  height: 0,
};

const input = () => {
  data.name = readline.question('Informe seu nome: ');
  data.weight = readline.questionFloat('Informe seu peso atual em KG: ');
  data.height = readline.questionFloat('Informe sua altura em M: ');
};


const calcImc = (weight, height) => {
  return (weight / Math.pow(height, 2)).toFixed(2);
};

const imc = () => {
  input();
  const calc = calcImc(data.weight, data.height);
  let message = '';
  if (calc < 18.5) message = 'Abaixo do peso (magreza)';
  else if (calc >= 18.5 && calc < 24.9) message = 'Peso normal';
  else if (calc >= 25.0 && calc < 29.9) message = 'Acima do peso (sobrepeso)';
  else if (calc >= 30.0 && calc < 34.9) message = 'Obesidade grau I';
  else if (calc >= 35.0 && calc < 39.9) message = 'Obesidade grau II';
  else if (calc > 40.0) message = 'Obesidade grau III e IV';
  console.log(`Olá ${data.name}, seu imc é ${calc} e você está ${message}!`);
};

imc();
