import { useState } from 'react';

import './App.scss';

import SearchPanel from './components/SearchPanel/SearchPanel';
import WeatherPanel from './components/WeatherPanel/WeatherPanel';

const App = () => {

	const cities = [
                    {
                        "name": "Александрия",
                        "lat": "48.6666667",
                        "lng": "33.1166667"
                    },
                    {
                        "name": "Бобринец",
                        "lat": "48.050861",
                        "lng": "32.16589"
                    },
                    {
                        "name": "Гайворон",
                        "lat": "48.3333333",
                        "lng": "29.8666667"
                    },
                    {
                        "name": "Долинская",
                        "lat": "48.1108333",
                        "lng": "32.7647222"
                    },
                    {
                        "name": "Знаменка",
                        "lat": "48.7166667",
                        "lng": "32.6666667"
                    },
                    {
                        "name": "Кировоград",
                        "lat": "48.508389",
                        "lng": "32.264801"
                    },
                    {
                        "name": "Малая Виска",
                        "lat": "48.65",
                        "lng": "31.6333333"
                    },
                    {
                        "name": "Новомиргород",
                        "lat": "48.7833333",
                        "lng": "31.65"
                    },
                    {
                        "name": "Новоукраинка",
                        "lat": "48.3155556",
                        "lng": "31.5269444"
                    },
                    {
                        "name": "Светловодск",
                        "lat": "49.0502778",
                        "lng": "33.2419444"
                    }
                ];

    const [currentCity, setCurrentCity] = useState(cities[0]);

    const findCityObj = (name) => {
    	setCurrentCity( cities.find(city => city.name === name) );
    }

	return (
		<div className="app">
			<div className="container">

				<SearchPanel options={cities} onSelected={ (cityName) => findCityObj(cityName) }/>
				<WeatherPanel {...currentCity} />	

			</div>	
		</div>
	);
}

export default App;
