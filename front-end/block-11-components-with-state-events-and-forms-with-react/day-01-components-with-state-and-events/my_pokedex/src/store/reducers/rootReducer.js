import { combineReducers } from "redux";
import reducer from './reducer';
import reducerPokedex from './reducerPokedex';

const rootReducer = combineReducers({ reducer, reducerPokedex });

export default rootReducer;
