/* Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras:

Porcentagem >= 90 -> A
Porcentagem >= 80 -> B
Porcentagem >= 70 -> C
Porcentagem >= 60 -> D
Porcentagem >= 50 -> E
Porcentagem < 50 -> F */

var nota = 50
let porcentagem = 70

if (porcentagem >= 90) {
  porc = nota / 100 * porcentagem;
  console.log(`O valor da nota é ${(nota).toLocaleString('pt-BR', { minimumFractionDigits: 2 })} e o valor dela com ${porcentagem} é ${(porc).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`);
} else if (porcentagem >= 80) {
  porc = nota / 100 * porcentagem;
  console.log(`O valor da nota é ${(nota).toLocaleString('pt-BR', { minimumFractionDigits: 2 })} e o valor dela com $ é ${porcentagem} é ${(porc).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`);
} else if (porcentagem >= 70) {
  porc = nota / 100 * porcentagem;
  console.log(`O valor da nota é ${(nota).toLocaleString('pt-BR', { minimumFractionDigits: 2 })} e o valor dela com $ é ${porcentagem} é ${(porc).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`);
} else if (porcentagem >= 6.0) {
  porc = nota / 100 * porcentagem;
  console.log(`O valor da nota é ${(nota).toLocaleString('pt-BR', { minimumFractionDigits: 2 })} e o valor dela com $ é ${porcentagem} é ${(porc).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`);
} else if (porcentagem >= 50) {
  porc = nota / 100 * porcentagem;
  console.log(`O valor da nota é ${(nota).toLocaleString('pt-BR', { minimumFractionDigits: 2 })} e o valor dela com $ é ${porcentagem} é ${(porc).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`);
} else {
  porc = nota / 100 * porcentagem;
  console.log(`O valor da nota é ${(nota).toLocaleString('pt-BR', { minimumFractionDigits: 2 })} e o valor dela com $ é ${porcentagem} é ${(porc).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`);
}
