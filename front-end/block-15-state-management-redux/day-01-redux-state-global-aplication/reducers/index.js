import { combineReducers } from 'redux';

const meuReducer = () => ({
  type: 'LOGIN',
});

const meuOutroReducer = () => ({
  type: 'PASSWORD',
});

const reducerCombinado = combineReducers({
  meuReducer,
  meuOutroReducer
});

export default reducerCombinado;