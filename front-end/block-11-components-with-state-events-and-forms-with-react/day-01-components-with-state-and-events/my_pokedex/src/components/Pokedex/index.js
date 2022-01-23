import React, { useContext } from 'react';
import Pokemon from '../Pokemon';
import Button from '../Button';
import Context from '../../context/context';

export default function Pokedex() {
  const { pokedex, setPokedex } = useContext(Context);
  const { index, typePokemon, pokemons, loading, error } = pokedex
  
  const handlePokemons = () => {
    if (typePokemon === 'All') {
      return pokemons;
    }
    return pokemons.filter((pokemon) => pokemon.type === typePokemon);
  };

  const proxPokemon = (pokemons) => {
    setPokedex(pokedex => ({
      ...pokedex,
      index: pokedex.index !== pokemons.length -1 ? pokedex.index + 1 : 0,
    }));
  };

  const handleClick = (type) => {
    setPokedex(pokedex => ({
      ...pokedex,
      typePokemon: type,
      index: 0,
    }));
  };

  const getTypesPokemons = () => {
    const types = pokemons.map((pokemon) => pokemon.type);
    return types.filter((type, index) => types.indexOf(type) === index);
  };

  const types = ['All', ...getTypesPokemons()];
  const buttons = types;
  const getPokemon = handlePokemons();
  console.log(getPokemon);
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
              handlePokemon={ () => proxPokemon(getPokemon) }
            >
              Próximo
            </Button>
          </div>
          <div className="buttons-types">
            { buttons.map((button) => (
              <Button
                classButton='btn-default'
                key={ button }
                handlePokemon={ () => handleClick(button) }
              >
                { button }
              </Button>
            )) }
          </div>
        </div>
      ) }
      { error.length > 0 && <p>HAHAHA! Os Pokemons estão dormindo!!!</p> }
    </div>
  );
}
