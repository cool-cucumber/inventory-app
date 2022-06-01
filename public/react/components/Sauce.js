import React from 'react';


export const Sauce = ({sauce, clickSauce}) => {
  console.log('safegrgerkkmgrg',sauce)
  return <div id="product" onClick={() => clickSauce(sauce.id)}>
    
    <img id="single-sauce-img" src={sauce.image} alt={sauce.name} />
    <h3 className="text">{sauce.name}</h3>
  </div>
} 
	