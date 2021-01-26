import { useState } from 'react';

import './SearchPanel.scss';

const SearchPanel = () => {

	const [option, setOption] = useState('volvo');

	const handleChange = (event) => {
	    setOption(event.target.value);
  	};

  	console.log(option);

	return (
		<div className="search-panel">
		  	<select defaultValue={option} onChange={handleChange} >
				<option value="volvo">Volvo</option>
				<option value="saab">Saab</option>
				<option value="mercedes">Mercedes</option>
				<option value="audi">Audi</option>				
			</select>
		</div>
	);
}

export default SearchPanel;