import React from 'react';
import { MdOutlineArrowBackIos } from "react-icons/md";

export const SauceDetails = ({sauce, goHome}) => {
  return <section className="sauce-details">
    <MdOutlineArrowBackIos className="back-btn" onClick={goHome}/>
    <img src={sauce.image}></img>
    <h2>{sauce.name}</h2>
    <div className='desc'>
      <p>{sauce.description}</p>
      <p>{sauce.category}</p>
    </div>
    <p>{sauce.price}</p>
  </section>
} 
	