import { useState, useEffect } from 'react';

import './SearchPanel.scss';

const SearchPanel = ({ options : cities, onSelected }) => {

	const [option, setOption] = useState(cities[0].name);

	useEffect(() => onSelected(option), [option]);
	
	const handleChange = async (event) => {
	    setOption(event.target.value);
  	};

  	const optionCities = cities.map((city, index) => {
  		return (
  			<option key={ index } 
  					value={ city.name }>
  					{ city.name }
  			</option>
  		)
  	});

	return (
		<div className="search-panel">
		  	<select value={option} onChange={handleChange} >
				{ optionCities }			
			</select>
		</div>
	);
}

export default SearchPanel;