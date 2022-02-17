import React, { Component } from 'react';
import PropsTypes from 'prop-types';

import './Card.css';

class Card extends Component {
  render() {
    const baseURL = 'https://api.opendota.com';
    return (
      <section className="dota__content-card">
        <div className="dota__card-item">
          <img src={`${baseURL}${this.props.img}`} alt="Heroes" />
        </div>
        <div className="dota__content-info">
        <h2>{this.props.name}</h2>
        <p>{this.props.primaryAttk}</p>
        <p>{this.props.attackType}</p>
        <p>{this.props.roles}</p>
        </div>
      </section>
    );
  }
}

Card.propTypes = {
  img: PropsTypes.string.isRequired,
  name: PropsTypes.string.isRequired,
  primaryAttk: PropsTypes.string.isRequired,
  attackType: PropsTypes.string.isRequired,
};
export default Card;