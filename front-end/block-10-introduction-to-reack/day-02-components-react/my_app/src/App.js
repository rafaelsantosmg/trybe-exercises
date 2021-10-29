import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
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
