import { createStore } from 'redux';
// Importando o reducer combinado que fizemos logo acima
import reducerCombinado from './reducers/index.js';

const store = createStore(reducerCombinado);

console.log(store.getState());
