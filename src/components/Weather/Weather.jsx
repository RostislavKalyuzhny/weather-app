import { useState, useEffect } from 'react'

import './Weather.scss';

const Weather = ({ name, lat, lng }) => {

   // const [weatherData, setWeatherData] = useState(null);

    useEffect(() => {
        fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${ lat }&lon=${ lng }&units=metric&exclude=hourly&lang=ru&appid=98299c85f0194824c133627239975ddb`)
            .then(response => response.json())
            .then(data => console.log(data));
    });

	return (
		<div className="weather">

		</div>
	);
}

export default Weather;