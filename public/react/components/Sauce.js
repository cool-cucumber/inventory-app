import React from 'react';

export const Sauce = ({sauce, clickSauce}) => {

  return <div onClick={() => clickSauce(sauce.id)}>
    <h3>{sauce.name}</h3>
    <img src={sauce.image} alt={sauce.name} />
  </div>
} 
	