import React from 'react';

export default function Pokemon({ pokemon: { name, type, averageWeight, image } }) {
  return (
    <div className="pokemon">
      <p>{ name }</p>
      <p>{ type }</p>
      <p>{ averageWeight.value } { averageWeight.measurementUnit }</p>
      <img src={ image } alt={ name } />
    </div>
  );
}
