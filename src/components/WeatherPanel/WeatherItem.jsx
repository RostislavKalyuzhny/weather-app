
import './WeatherItem.scss';

const WeatherItem = ({ day }) => {

	return (
		<div className="weather-item">
            <div> { day.dt.weekDay }</div>
            <div>{ day.dt.date } : { day.dt.month } </div>
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
