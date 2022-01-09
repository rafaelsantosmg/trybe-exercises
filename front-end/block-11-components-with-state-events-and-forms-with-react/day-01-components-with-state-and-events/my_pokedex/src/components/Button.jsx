import React, { Component } from 'react';

class Button extends Component {
  render() {
    const { children, classButton, handlePokemon, isDisabled } = this.props;
    return (
      <button className={classButton} onClick={handlePokemon} disabled={isDisabled}>
        {children}
      </button>
    )
  }
}

export default Button;
