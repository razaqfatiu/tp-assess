import React from 'react';

const PersonC = ({ person }) => {
  return (
    <div>
      <p>Name: {person?.name}</p>
      <p>Height: {person?.height}</p>
      <p>Mass: {person?.mass}</p>
      <p>Skin Color: {person?.skin_color}</p>
    </div>
  );
};

export default PersonC;
