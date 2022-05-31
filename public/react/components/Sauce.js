import React from 'react';

export const Sauce = ({sauce, clickSauce}) => {

  return <div id="product" onClick={() => clickSauce(sauce.id)}>
    <img id="single-sauce-img" src={sauce.image} alt={props.sauce.name} />
    <h3 class="text">{sauce.name}</h3>
  </div>
} 
	