import React, { Component } from 'react';
import { connect } from 'react-redux';
// import pokemons from '../data';
import Pokemon from './Pokemon';
import Button from './Button';
import ThunkPokemonAction from '../store/actions/action';

class Pokedex extends Component {
  constructor() {
    super();
    this.state = {
      index: 0,
      type: 'All'
    };
    this.handlePokemons = this.handlePokemons.bind(this);
    this.proxPokemon = this.proxPokemon.bind(this);
    this.getTypesPokemons = this.getTypesPokemons.bind(this);
    this.handleTypePokemon = this.handleTypePokemon.bind(this);
  }

  componentDidMount() {
    const { getStorePokemons } = this.props;
    getStorePokemons();
  }

  handlePokemons() {
    const { type } = this.state;
    const { pokemons } = this.props;
    if (type === 'All') {
      return pokemons;
    }
    return pokemons.filter((pokemon) => pokemon.type === type);
  }

  proxPokemon(pokemons) {
    this.setState((prevState) => ({
      index: prevState.index === pokemons.length - 1 ? 0 : prevState.index + 1,
    }));
  }

  handleTypePokemon(type) {
    this.setState({ index: 0, type: type });
  }

  getTypesPokemons() {
    const { pokemons } = this.props;
    const types = pokemons.map((pokemon) => pokemon.type);
    return types.filter((type, index) => types.indexOf(type) === index);
  }

  render() {
    const types = this.getTypesPokemons();
    const buttons = types;
    const { index } = this.state;
    const { loading, error } = this.props;
    const getPokemon = this.handlePokemons();
    return (
      <div className="container">
        { loading ? (
          <p>...Carregando</p>
        ) : (
          <div className="pokedex">
            <div className="pokemon-cards">
              <Pokemon pokemon={ getPokemon[index] } />
              <Button
                classButton='btn-prox'
                handlePokemon={ () => this.proxPokemon(getPokemon) }
              >
                Próximo
              </Button>
            </div>
            <div className="buttons-types">
              { buttons.map((button) => (
                <Button
                  classButton='btn-default'
                  key={ button }
                  handlePokemon={ () => this.handleTypePokemon(button) }
                >
                  { button }
                </Button>
              )) }
            </div>
          </div>
        ) }
        { error.length > 0 && <p>HAHAHA! Os Pokemons estão dormindo!!!</p>}
      </div>
    );
  }
}

  const mapStateToProps = (state) => ({
    pokemons: state.pokemon,
    loading: state.loading,
    error: state.error,
  });

  const mapDispatchToProps = (dispatch) => ({
    getStorePokemons: () => dispatch(ThunkPokemonAction()),
  });

export default connect(mapStateToProps, mapDispatchToProps)(Pokedex);
