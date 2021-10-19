const createListCoins = (coinsArray) => {
  const coins = coinsArray.slice(0, 10);
  const getList = document.getElementById('list-coins');

  coins.forEach((coin) => {
    const createLi = document.createElement('li');
    const price = Number(coin.priceUsd);

    createLi.innerHTML = `${coin.name} (${coin.symbol}): ${price.toFixed(2)}`;

    getList.appendChild(createLi);
  });
};

const getCoins = async () => {
  const url = `https://api.coincap.io/v2/assets`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    createListCoins(data.data);
  } catch (error) { console.log(error); };
};

window.onload = () => getCoins();
