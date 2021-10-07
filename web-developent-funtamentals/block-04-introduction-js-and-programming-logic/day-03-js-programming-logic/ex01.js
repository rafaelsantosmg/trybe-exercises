/* Para o primeiro exercício de hoje, faça um programa que, dado um valor n qualquer, seja n > 1 , imprima na tela um quadrado feito de asteriscos de lado de tamanho n . Por exemplo:  */
let n = 5
let string = ""

for (l = 0; l < n; l += 1) {
  for (c = 0; c < n; c += 1) {
    string += "*"
  }
  console.log(string)
  string = ""
}