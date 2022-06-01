import React, { useState, useEffect } from 'react';
import { SaucesList } from './SaucesList';

// import and prepend the api url to any fetch calls
import apiURL from '../api';
import { SauceDetails } from './SauceDetails';

import { AiOutlineDelete } from 'react-icons/ai';
export const App = () => {

	


	const [sauces, setSauces] = useState([]);
	const [currentSauce, setCurrentSauce] = useState(0);

	let deleteSauce = async (idx) => {
		console.log('iddd',idx)
		// console.log('route',`${apiURL}/sauces/${idx}`);
		await fetch(`${apiURL}/sauces/${idx}`, {
			method: "DELETE",
			headers: {
				'Content-type': 'application/json'
			}
			
		})
		
		setCurrentSauce(0);
		fetchSauces();


	}

	async function fetchSauces(){
		try {
			const response = await fetch(`${apiURL}/sauces`);
			const saucesData = await response.json();
			console.log("here is my data",saucesData)
			
			setSauces(saucesData);
		} catch (err) {
			console.log("Oh no an error! ", err)
		}
	}

	const clickSauce = (id) => {
		
		setCurrentSauce(id)
	}

	useEffect(() => {
		fetchSauces();
	}, []);

	return (
		<main>	
			
      <h1 className="text">Sauce Store</h1>
			{currentSauce > 0 ? <div>
				
			<SauceDetails sauce={sauces.find(sauce=>sauce.id===currentSauce)} goHome={() => clickSauce(0)}/> 
			<AiOutlineDelete className = "back-btn" id="delete-btn" onClick={() => 
				// console.log( "i am clicking delete",sauces[currentSauce - 1])
				{
					deleteSauce(sauces.find(sauce=>sauce.id===currentSauce).id)
				}
		
			}/>
			</div>: 
			
		
			
			<SaucesList sauces={sauces} clickSauce={clickSauce}/>
			
			}
			
		</main>
	)
}