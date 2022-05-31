import React, { useState, useEffect } from 'react';
import { SaucesList } from './SaucesList';

// import and prepend the api url to any fetch calls
import apiURL from '../api';
import { SauceDetails } from './SauceDetails';

export const App = () => {

	const [sauces, setSauces] = useState([]);
	const [currentSauce, setCurrentSauce] = useState(0)

	async function fetchSauces(){
		try {
			const response = await fetch(`${apiURL}/sauces`);
			const saucesData = await response.json();
			
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
      <h1>Sauce Store</h1>
			<h2>All things 🔥</h2>
			{currentSauce > 0 ? <SauceDetails sauce={sauces[currentSauce - 1]} goHome={() => clickSauce(0)}/> : <SaucesList sauces={sauces} clickSauce={clickSauce}/>}
			
		</main>
	)
}