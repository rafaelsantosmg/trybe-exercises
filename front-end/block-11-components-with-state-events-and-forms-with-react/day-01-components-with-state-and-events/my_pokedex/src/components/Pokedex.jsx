import React, { Component } from 'react';
import { connect } from 'react-redux';
import Pokemon from './Pokemon';
import Button from './Button';
import ThunkPokemonAction from '../store/actions/action';
import { actionTypePokemons, actionIndexPokemon } from '../store/actions/actionPokedex';

class Pokedex extends Component {
  constructor() {
    super();
    this.handlePokemons = this.handlePokemons.bind(this);
    this.proxPokemon = this.proxPokemon.bind(this);
    this.getTypesPokemons = this.getTypesPokemons.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    const { getStorePokemons } = this.props;
    getStorePokemons();
  }

  handlePokemons() {
    const { pokemons, typePokemon } = this.props;
    if (typePokemon === 'All') {
      return pokemons;
    }
    return pokemons.filter((pokemon) => pokemon.type === typePokemon);
  }

  proxPokemon(pokemons) {
    const { index, handleStoreIndex } = this.props;
    handleStoreIndex(index, pokemons.length)
  }

  handleClick(type) {
    const { handleStoreIndex, handleStoreType } = this.props;
    handleStoreType(type);
    handleStoreIndex(0)
  }

  getTypesPokemons() {
    const { pokemons } = this.props;
    const types = pokemons.map((pokemon) => pokemon.type);
    return types.filter((type, index) => types.indexOf(type) === index);
  }

  render() {
    const types = ['All', ...this.getTypesPokemons()];
    const buttons = types;
    const { loading, error, index } = this.props;
    console.log(index);
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
                  handlePokemon={ () => this.handleClick(button) }
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
    pokemons: state.reducer.pokemon,
    loading: state.reducer.loading,
    error: state.reducer.error,
    index: state.reducerPokedex.index,
    typePokemon: state.reducerPokedex.typePokemon,
  });

  const mapDispatchToProps = (dispatch) => ({
    getStorePokemons: () => dispatch(ThunkPokemonAction()),
    handleStoreIndex: (index, length) => 
      dispatch(actionIndexPokemon(index, length)),
    handleStoreType: (type) => dispatch(actionTypePokemons(type)),
  });

export default connect(mapStateToProps, mapDispatchToProps)(Pokedex);
