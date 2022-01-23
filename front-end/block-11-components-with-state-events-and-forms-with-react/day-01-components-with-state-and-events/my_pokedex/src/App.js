import React from 'react';
import './App.css';
import PokedexContext from './context/PokedexContext';
import Header from './components/Header';
import Pokedex from './components/Pokedex';

export default function App() {
  return (
    <>
      <Header />
      <PokedexContext>
        <Pokedex />
      </PokedexContext>
    </>
  );
}
