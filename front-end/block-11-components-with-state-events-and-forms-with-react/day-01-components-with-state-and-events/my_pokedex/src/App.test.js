import React from 'react';
import { render } from '@testing-library/react';
import renderWithRedux from './test/helpes/renderWithRedux';
import App from './App';
// import fetchMock from 'fetch-mock-jest';
// import store from './store/store';
// import pokemons from './data';

// const INITIAL_STATE = {
//   pokemon: pokemons,
//   loading: false,
//   error: '',
// }

describe('Testa o Component Pokedex', () => {
  it('Teste se exite o título POKEDEX na tela', () => {
    const { queryByText } = render(<App />);
    const title = queryByText('POKÉDEX');
    expect(title).toBeInTheDocument();
  })
  // it('Teste se um pokemon é exibido na tela', () => {
  //   const { query}
  // })
  // it('Testa comunicação com a API', () => {
  //   fetchMock.getOnce('http://localhost:5000/pokemons', {
  //     body: { message: 'myDogUrl' },
  //   });
  // })
})
