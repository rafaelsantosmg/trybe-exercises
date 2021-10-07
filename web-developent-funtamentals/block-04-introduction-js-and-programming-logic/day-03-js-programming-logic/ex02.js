/* Para o segundo exercício, faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base. Por exemplo:  */

let n = 5
let string = ""

for (l = 0; l < n; l += 1) {
  for (c = 0; c < n; c += 1) {
    if (l === c) {
      string += "*"
    }
  }
  console.log(string)
}