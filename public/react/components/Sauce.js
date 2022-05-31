import React from 'react';

export const Sauce = (props) => {

  return <div id="product">
    <img id="single-sauce-img" src={props.sauce.image} alt={props.sauce.name} />
    <h3 class="text">{props.sauce.name}</h3>
  </div>
} 
	