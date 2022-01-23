import React, { useState, useEffect } from 'react';
import Context from './context';
import { fetchPokemons } from '../data';

const INITIAL_STATE = {
  index: 0,
  typePokemon: 'All',
  pokemons: [],
  loading: true,
  error: '',
};

export default function PokedexContext({ children }) {

  const [pokedex, setPokedex] = useState(INITIAL_STATE);
  useEffect(() => {
    const getPokemons = async () => {
      const data = await fetchPokemons();
      setPokedex(pokedex => ({
        ...pokedex,
        pokemons: data,
        loading: false,
      }));
    };
    getPokemons();
  }, []);

  return (
    <Context.Provider value={ { pokedex, setPokedex } }>
      { children }
    </Context.Provider>
  );
}
