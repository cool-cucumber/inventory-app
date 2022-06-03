import React from 'react';
import { Sauce } from './Sauce';

export const SaucesList = ({sauces, clickSauce}) => {
	return <div className="sauce-list">
		{
			sauces.map((sauce, idx) => {
				return <Sauce sauce={sauce} key={idx} clickSauce={clickSauce}/>
			})
		}
	</div>
} 
