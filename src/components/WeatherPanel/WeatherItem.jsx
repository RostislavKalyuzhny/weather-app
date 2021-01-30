

import './WeatherItem.scss';

const WeatherItem = ({ day }) => {

    const { dt, temp, weather } = day;

	return (
		<div className="weather-item">
            <div className="header">
                <p className="day">{ dt.weekDay }</p>
            <p className="date">{ dt.date }</p>
            <p className="month">{ dt.month }</p>

            <p className="weather-icon">
                <img 
                 src={ require(`../../images/icons/${weather[0].main}.png`).default } 
                 alt={weather[0].main} /> {/*!!!!!!!*/}
            </p> 
            </div>     

           <div className="content">
                 <div className="description">{ weather[0].description }</div>
            <div className="temperature">
                <div className="min">
                    <div>Мин.</div> 
                    <span>{ temp.min }  </span>
                </div>

                <div className="max">
                    <div>Макс.</div>
                    <span>{ temp.max }  </span>
                </div>
                
            </div>
           </div>   
        </div>
	)
}

export default WeatherItem;
