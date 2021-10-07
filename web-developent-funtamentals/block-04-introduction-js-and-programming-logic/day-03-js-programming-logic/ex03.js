/* Agora inverta o lado do triângulo. Por exemplo: */

let n = 5
let string = ""
cont = 1

for (l = 0; l < n ; l += 1) {
  for (c = 0; c < n; c += 1) {
    if (c < n - cont ) {
      string += " "
    } else {
      string += "*"
    }
  }
  cont += 1
  console.log(string)
  string = ""
}
