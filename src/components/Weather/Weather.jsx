import { useState, useEffect } from 'react';

import './Weather.scss';

import WeatherItem from './WeatherItem';

const Weather = ({ name, lat, lng }) => {

    const [weatherData, setWeatherData] = useState([]);

    useEffect(() => {
        fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${ lat }&lon=${ lng }&units=metric&exclude=hourly&lang=ru&appid=98299c85f0194824c133627239975ddb`)
            .then(response => response.json())
            .then(data => setWeatherData(data.daily));
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

export default Weather;