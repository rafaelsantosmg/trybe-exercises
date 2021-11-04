import React, { Component } from 'react';

class Button extends Component {
  render() {
    const { children, classButton, hanglePokemon, isDisabled } = this.props;
    return (
      <button className={classButton} onClick={hanglePokemon} disabled={isDisabled}>
        {children}
      </button>
    )
  }
}

export default Button;
