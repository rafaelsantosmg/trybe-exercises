import { POKEMONS, API_ERROR } from '../actions/action';

const INITIAL_STATE = {
  pokemon: [],
  loading: true,
  error: '',
}

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case POKEMONS:
    return {
      ...state,
      pokemon: [...action.pokemonsArr],
      loading: false,
    }
  case API_ERROR:
    return {
      ...state,
      error: action.error,
    }
  default:
    return state;
  }
}

export default reducer;
