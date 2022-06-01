import React, { useState, useEffect } from 'react';
import { SaucesList } from './SaucesList';
import { BsPatchPlus } from 'react-icons/bs'
import { MdOutlineArrowBackIos } from "react-icons/md";

// import and prepend the api url to any fetch calls
import apiURL from '../api';
import { SauceDetails } from './SauceDetails';
import { AddSauceForm } from './AddSauceForm';

export const App = () => {

	const [sauces, setSauces] = useState([]);
	const [currentSauce, setCurrentSauce] = useState(0);
	const [addingSauce, setAddingSauce] = useState(false)

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

	const postSauce = async (newSauce) => {
		try {
			await fetch(`${apiURL}/sauces`, {
				method: "POST", 
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(newSauce)
			});
			fetchSauces()
			} catch (err) {
			console.log("Oh no an error! ", err)
		}
		setAddingSauce(false)


	}

	useEffect(() => {
		fetchSauces();
	}, []);

	const saucePages = currentSauce > 0 ? <SauceDetails sauce={sauces[currentSauce - 1]} goHome={() => clickSauce(0)}/> : <SaucesList sauces={sauces} clickSauce={clickSauce}/>

	return (
		<main>	
			<header>
      	<h1 className="text">Sauce Store</h1>
				{addingSauce === true &&  <MdOutlineArrowBackIos className="back-btn" onClick={() => setAddingSauce(false)}/>}
				{(!addingSauce && currentSauce < 1) && <BsPatchPlus onClick={() => setAddingSauce(true)} className="back-btn"/>}
			</header>
			
			{addingSauce ? <AddSauceForm postSauce={postSauce}/> : saucePages}
			
		</main>
	)
}