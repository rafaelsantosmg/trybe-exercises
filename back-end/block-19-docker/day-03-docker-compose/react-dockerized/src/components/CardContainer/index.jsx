import React, { Component } from 'react';
import Card from '../Card';
import { fetApiDota } from '../../api/dotaApi';

import './CardContainer.css';

class CardContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      infoData: [],
    }
  }

  componentDidMount() {
    fetApiDota()
      .then((data) => this.setState({ infoData: data }) )
  }
  
  render() {
    return (
      <main className="dota__card">
        {this.state.infoData.map((data) => (
          <Card 
            key={data.id}
            img={data.img} 
            name={data.localized_name}
            primaryAttk={data.primary_attr}
            attackType={data.attack_type}
            roles={data.roles.map((role, index)=> index < data.roles.length - 1 ? `${role} | `: role)}
          />
        ))}
      </main>
    );
  }
}

export default CardContainer;
