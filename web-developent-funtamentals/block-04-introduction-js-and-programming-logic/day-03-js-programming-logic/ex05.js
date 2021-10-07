/* Faça uma pirâmide com n asteriscos de base que seja vazia no meio. Assuma que o valor de n será sempre ímpar: */

let base = 10
let string = ""

if (base % 2 === 0) {
  base += 1
}

let lString = Math.round(base / 2)
let rString = Math.round(base / 2)

for (l = 0; l < base; l += 2) {
  for (let c = 1; c <= base; c += 1) {
    if (c === lString || c === rString) {
      string += "*"
    } else if (rString === base) {
      string += "*"
    } else {
      string += " "
    }
  }
  lString -= 1
  rString += 1
  console.log(string)
  string = ""
}
