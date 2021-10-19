// apiScript.js     
const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = async () => {
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };

  try {
    const response = await fetch(API_URL, myObject);
    const data = await response.json();
    console.log(data.joke);
    document.querySelector('#jokeContainer').innerHTML = data.joke;
  } catch (error) {console.log(error)};
};

window.onload = () => fetchJoke();
