import React, { Component } from 'react';


class App extends Component {
  constructor() {
    super();
    this.handleClick1 = this.handleClick1.bind(this)
    this.handleClick2 = this.handleClick2.bind(this);
    this.handleClick3 = this.handleClick3.bind(this);
    this.state = {
      numberClick1: 0,
      numberClick2: 0,
      numberClick3: 0,
    }
  }

  getButtonColor(num) {
    return num % 2 === 0 ? 'green' : 'white';
  }

  handleClick1() {
    this.setState((state, _props) => ({
      numberClick1: state.numberClick1 + 1
    }), () => {
      console.log(this.getButtonColor(this.state.numberClick1));
    });
  }

  handleClick2() {
    this.setState((state, _props) => ({
      numberClick2: state.numberClick2 + 1
    }), () => {
      console.log(`Botão 2 ${this.getButtonColor(this.state.numberClick2)}`);
    });
  }

  handleClick3() {
    this.setState((state, _props) => ({
      numberClick3: state.numberClick3 + 1
    }), () => {
      console.log(`Botão 3 ${this.getButtonColor(this.state.numberClick3)}`);
    });
  }

  render() {
    const { numberClick1, numberClick2, numberClick3 } = this.state;
    return (
      <div>
        <button
          onClick={this.handleClick1}
          style={{ backgroundColor: this.getButtonColor(numberClick1) }}>
          Meu Botão 1 {numberClick1})
        </button>
        <button
          onClick={this.handleClick2}
          style={{ backgroundColor: this.getButtonColor(numberClick2) }}>
          Meu Botão 2 {numberClick2})
        </button>
        <button
          onClick={this.handleClick3}
          style={{ backgroundColor: this.getButtonColor(numberClick3) }}>
          Meu Botão 3 {numberClick3})
        </button>
      </div>
    );
  }
}

export default App;
