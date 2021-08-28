/* Depois, faça uma pirâmide com n asteriscos de base: */

let base = 9
let string = ""
let lString = (base + 1) / 2
let rString = (base + 1) / 2
let inicio = (base + 1) / 2

for (let l = 0; l < base; l += 2) {
  for (let c = 1; c <= base; c += 1) {
    if (c < lString || c > rString) {
      string += " "
    } else {
      string += "*"
    }
  }
  lString -= 1
  rString += 1
  console.log(string)
  string = ""
}