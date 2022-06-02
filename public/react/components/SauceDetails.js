import React, {useState} from 'react';
import { MdOutlineArrowBackIos } from "react-icons/md";
import { FiEdit } from "react-icons/fi"
import { AiOutlineDelete } from 'react-icons/ai';
import { EditSauceForm } from './EditSauceForm';
import apiURL from '../api';


export const SauceDetails = ({ sauce, goHome, deleteSauce }) => {

  const updateSauce = async (newSauce) => {
		try {
			await fetch(`${apiURL}/sauces`, {
				method: "PUT", 
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(newSauce)
			});
			} catch (err) {
			console.log("Oh no an error! ", err)
		}
		setIsEditing(false)
	}
  const [isEditing, setIsEditing] = useState(false)
  return <section className="sauce-details">
    <MdOutlineArrowBackIos className="back-btn" onClick={goHome}/>
    <img src={sauce.image}></img>
    <h2>{sauce.name}</h2>
    <div className='desc'>
      <p>{sauce.description}</p>
      <p>{sauce.category}</p>
    </div>
    <p>{sauce.price}</p>
    <FiEdit className="back-btn edit" onClick={() => setIsEditing(!isEditing)}></FiEdit>
    <AiOutlineDelete className = "back-btn edit" onClick={() =>	deleteSauce(sauce.id)}/>
	  {isEditing ? <EditSauceForm updateSauce={updateSauce} sauce={sauce}/> : <></>}
  </section>
} 
	