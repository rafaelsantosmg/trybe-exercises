/* Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.

* Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.
* Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras minúsculas (lower case) .
* Se a peça passada for inválida, o programa deve retornar uma mensagem de erro.
Exemplo: bishop (bispo) -> diagonals (diagonais) */

const chessPiece = "ReI";

switch (chessPiece.toLowerCase()) {
  case 'rei':
    console.log("O 'REI' pode mover-se em todas as direções (horizontal, vertical e diagonal) somente uma casa de cada vez.");
    break;
  case "rainha":
    console.log(`A "RAINHA" move-se ao longo da horizontal, vertical e diagonais mas não pode pular outras peças.`);
    break;
  case "bispo":
    console.log(`O "BISPO" move-se ao longo da diagonal. Não pode pular outras peças.`);
    break;
  case "cavalo":
    console.log(`É a única peça que pode pular as outras. O movimento do "CAVALO" é em forma de “L”, quer dizer, duas casas em sentido horizontal e mais uma na vertical ou vice-versa.`);
    break;
  case "torre":
    console.log(`A "TORRE" movimenta-se pela vertical ou horizontal, mas não pode pular outras peças.`);
    break;
  case "peao":
    console.log(`O "PEÃO" movimenta-se apenas uma casa para frente e somente captura outras peças na diagonal. Opcionalmente, cada peão pode avançar duas casas no seu primeiro movimento do jogo.`);
    break;
  default:
    console.log(`ERRO! Peça ${chessPiece} Inexistente!!!`);
}
