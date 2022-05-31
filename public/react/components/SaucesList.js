import React from 'react';
import { Sauce } from './Sauce';

export const SaucesList = ({sauces, clickSauce}) => {
	return <>
		{
			sauces.map((sauce, idx) => {
				return <Sauce sauce={sauce} key={idx} clickSauce={clickSauce}/>
			})
		}
	</>
} 
