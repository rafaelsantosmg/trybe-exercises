const longestWord = strings => {
  const totCaracter = strings.split(' ');
  let string = totCaracter[0];
  for (let index = 1; index < totCaracter.length; index += 1) {
    string.length > totCaracter[index].length ? string = string : string = totCaracter[index];
  }
  console.log(string);
}

longestWord('Antônio foi no banheiro e não sabemos o que aconteceu') // retorna 'aconteceu'
