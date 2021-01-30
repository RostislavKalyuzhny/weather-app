import { useState, useEffect } from 'react';

import './WeatherPanel.scss';

import Weather from '../../services/Weather';
import WeatherItem from './WeatherItem';

const WeatherPanel = ({ name, lat, lng }) => {

    const [weatherData, setWeatherData] = useState([]);

    useEffect(() => {
        const weather = new Weather();

        weather.getShortWeather(lat, lng)
            .then(data => setWeatherData(data));    
    }, [ lat, lng ]);

    const outWeather = weatherData.map((day, index) => {
        return <WeatherItem day={day} key={index}/>
    });

	return (
		<div className="weather">
            { outWeather }
		</div>
	);
}

export default WeatherPanel;