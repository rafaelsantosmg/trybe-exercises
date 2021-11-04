import React, { Component } from 'react';
import pokemons from '../data';
import Pokemon from './Pokemon';
import Button from './Button';

class Pokedex extends Component {
  constructor() {
    super();
    this.getPokemons = this.getPokemons.bind(this)
    this.getBtnProx = this.getBtnProx.bind(this)
    this.hanglePokemon = this.hanglePokemon.bind(this)
    this.getTypePokemons = this.getTypePokemons.bind(this)
    this.state = {
      count: 0,
      type: 'All',
    };
  }

  getPokemons(type) {
    if (this.state.type === 'All') return pokemons.map((pokemon) => pokemon)
    if (this.state.type === type) {
      return pokemons.filter((pokemon) => pokemon.type === type ? pokemon : null)
    }
  }

  getBtnProx() {
    this.setState((prevState) => ({
      count: prevState.count < this.getPokemons(this.state.type).length - 1
        ? prevState.count + 1 : prevState.count = 0,
    }));
  }

  hanglePokemon(types) {
    this.setState(({
      type: types,
      count: 0,
    }));
  }

  getTypePokemons() {
    return pokemons.reduce((acc, pokemon) => (
      !acc.includes(pokemon.type) ? acc.concat(pokemon.type) : acc
    ), [])
  }

  render() {
    const buttons = this.getTypePokemons();
    return (
      <div className="pokedex">
        <div className="pokemon-cards">
          <Pokemon pokemon={this.getPokemons(this.state.type)[this.state.count]} />
          <Button
            classButton='btn-prox'
            hanglePokemon={this.getBtnProx}
            isDisabled={this.getPokemons(this.state.type).length === 1 ? true : false}
          >
            Próximo
          </Button>
        </div>
        <div className="buttons-types">
          {buttons.map((button) => (
            <Button
              key={button}
              classButton={'btn-default'}
              hanglePokemon={() => this.hanglePokemon(button)}
            >
              {button}
            </Button>
          ))}
        </div>
      </div>
    );
  }
}

export default Pokedex;
