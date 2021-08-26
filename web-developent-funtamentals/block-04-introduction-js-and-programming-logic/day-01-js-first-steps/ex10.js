/* Escreva um programa que se inicie com dois valores em duas constantes diferentes: o custo de um produto e seu valor de venda. A partir dos valores, calcule quanto de lucro (valor de venda descontado o custo do produto) a empresa terá ao vender mil desses produtos.

* Atente que, sobre o custo do produto, incide um imposto de 20%.

* Seu programa também deve emitir uma mensagem de erro e encerrar caso algum dos seus valores de entrada seja menor que zero.

* O lucro de um produto é o resultado da subtração do valor de venda pelo custo do mesmo, sendo que o imposto de 20% também faz parte do valor de custo.
  * valorCustoTotal = valorCusto + impostoSobreOCusto
  * lucro = valorVenda - valorCustoTotal (lucro de um produto) */

const CUSTO = 80
const VENDA = 20
const IMPOSTO = 20

if (CUSTO <= 0 || VENDA <= 0){
  console.log("ERRO! Valor não Pode ser 0!")
} else if (VENDA < CUSTO) {
  console.log("ERRO! O Valor de Venda é menor que de Custo!")
} else {
  let valorCustoTotal = 85.00 + (85 / 100 * 20)
  let lucro = VENDA - valorCustoTotal

  lucro = lucro.toLocaleString('pt-BR', {minimumFractionDigits: 2, style: 'currency', currency: 'BRL'})

  console.log(`O lucro do produto de custo ${CUSTO.toLocaleString('pt-BR', {minimumFractionDigits: 2, style: 'currency', currency: 'BRL'})} foi de ${lucro}`)
}
