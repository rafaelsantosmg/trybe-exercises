import { fetchPokemons } from '../../data';

export const POKEMONS = 'POKEMONS';
export const API_ERROR = 'API_ERROR';

const actionPokemons = (pokemonsArr) => ({
  type: POKEMONS,
  pokemonsArr,
});

const actionApiError = (error) => ({
  type: API_ERROR,
  error,
});

const ThunkPokemonAction = () => {
  return async (dispatch) => {
  try {
    const response = await fetchPokemons();
    const pokemons = await response;
    dispatch(actionPokemons(pokemons));
  } catch (error) {
    dispatch(actionApiError(error.message));
  }
  }
}

export default ThunkPokemonAction;
