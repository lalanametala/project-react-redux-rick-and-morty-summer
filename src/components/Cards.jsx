import React, { useContext } from 'react';
import AppContext from '../context/AppContext';

function Cards() {
  const { characters } = useContext(AppContext);
  return (
    <div className="border">
      {characters.length > 0 && characters.map((character) => (
        <div key={ `${character.id}${character.name}` } className="characteres-border">
          <h2>{ character.name }</h2>
          <img src={ character.image } alt={ character.name } />
        </div>
      ))}
    </div>
  );
}

export default Cards;
