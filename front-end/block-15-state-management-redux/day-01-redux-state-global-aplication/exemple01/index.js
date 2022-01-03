import { createStore } from 'redux';

const initialState = { login: false, email: "" };

const login = (email) => ({
  type: "LOGIN",
  email,
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        login: !state.login,
        email: action.email,
      };
    default:
      return state;
  }
};

const store = createStore(reducer);

store.dispatch(login("alguem@email.com"));

console.log(store.getState());
