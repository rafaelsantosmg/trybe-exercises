/* Depois, faça uma pirâmide com n asteriscos de base: */

let base = 5
let string = ""

let lString = Math.round(base / 2)
let rString = Math.round(base / 2)

for (l = 0; l < base; l += 2) {
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
