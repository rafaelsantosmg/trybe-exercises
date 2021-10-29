import React, { Component } from 'react';
import './App.css';
import Pokedex from './components/Pokedex';
import Header from './components/Header';

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Pokedex />
      </>
    );
  }
}

export default App;
