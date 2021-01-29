
import './WeatherItem.scss';

const WeatherItem = ({ day }) => {

	return (
		<div className="weather-item">
            <h3> Unix time: { day.dt }</h3>
            <div>{ day.weather[0].main }</div>
            <div>{ day.weather[0].description }</div>
            <div>
                <span>Мин. { day.temp.min }  </span>
                <span>Макс. { day.temp.max }</span>
            </div>
        </div>
	)
}

export default WeatherItem;
