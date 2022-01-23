// renderWithRedux para teste síncrono.

// const renderWithRedux = (
//   component,
//   { initialState, store = createStore(rootReducer, initialState) } = {}
// ) => {
//   return {
//     ...render(<Provider store={store}>{component}</Provider>),
//     store,
//   }
// }

// export default renderWithRedux;

// renderWithRedux para teste asíncrono.

import React from 'react';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from '../../store/reducers/reducer';
import reducerPokedex from '../../store/reducers/reducerPokedex';

const createMockStore = (initialState) => (
  createStore(combineReducers({ reducer, reducerPokedex }),
  initialState,
  applyMiddleware(thunk))
);

const renderWithRedux = (
  component, { initialState, store = createMockStore(initialState) } = {},
) => ({
  ...render(<Provider store={ store }>{component}</Provider>),
  store
});

export default renderWithRedux;
