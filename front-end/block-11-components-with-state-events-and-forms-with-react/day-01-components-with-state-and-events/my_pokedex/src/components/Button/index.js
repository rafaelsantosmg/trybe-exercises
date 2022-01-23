import React from 'react';

export default function Button({ children, classButton, handlePokemon, isDisabled }) {
  return (
    <button
      className={ classButton }
      onClick={ handlePokemon }
      disabled={ isDisabled }
    >
      { children }
    </button>
  );
}
