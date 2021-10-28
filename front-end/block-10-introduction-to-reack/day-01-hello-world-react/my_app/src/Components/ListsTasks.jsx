import React from "react";

class ListsTasks extends React.Component {
  render() {
    const array = ['Acordar', 'Tomar Café', 'Trabalhar', 'Dormir'];
    
    const task = (value) => {
      return (<li className="list">{value}</li>);
    }
    return (
      <ul>
        {array.map((value) => task(value))}
      </ul>
    );
  }
}

export default ListsTasks;
