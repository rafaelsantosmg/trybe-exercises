import { TYPE_POKEMON, INDEX_POKEMON } from '../actions/actionPokedex';

const INITIAL_STATE = {
  index: 0,
  typePokemon: 'All',
}

const reducerPokedex = ( state = INITIAL_STATE, action) => {
  switch (action.type) {
  case INDEX_POKEMON:
    return {
      ...state,
      index: action.index,
    }
  case TYPE_POKEMON:
    return {
      ...state,
      typePokemon: action.typePokemon,
    }
  default:
    return state;
  }
}

export default reducerPokedex;
