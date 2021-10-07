/** Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.
Exemplo de palíndromo: arara .
verificaPalindrome('arara') ;
Retorno esperado: true
verificaPalindrome('desenvolvimento') ;
Retorno esperado: false */

function verificaPalindrome(words) {
  key = words.lenght;
  palindrome = ''
  for (let index = key - 1; index >= 0; index -= 1) {
    palindrome += words[index];
  }
  if (palindrome === words) {
    return console.log(true);
  } else {
    return console.log(false);
  }
}

verificaPalindrome('arara');
