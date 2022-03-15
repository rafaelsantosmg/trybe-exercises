const readline = require('readline-sync');

const main = () => {
  const scripts = [
    { name: 'Calcular IMC', script: './services/imc.js' },
    { name: 'Calcular velocidade média', script: './services/velocidade.js' },
    { name: 'Jogo de adivinhação', script: './services/sorteio.js' },
  ];
  
  let mensagem = scripts
    .map((script, index) => `${index + 1} - ${script.name}`);
  
  mensagem.unshift('Escolha um número para executar o script correspondente');
  
  mensagem = mensagem.join('\n');
  
  const scriptNumber = readline.questionInt(`${mensagem} \n`) - 1;
  
  const script = scripts[scriptNumber];
  
  if (!script) return console.log('Número inválido. Saindo');
  
  require(script.script);
}

main();
