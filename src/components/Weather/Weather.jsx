import './Weather.scss';

const Weather = ({ name, lat, lng }) => {

	return (
		<div className="weather">
			<p>Name: { name }</p>
            <p>lat: { lat }</p>
		</div>
	);
}

export default Weather;