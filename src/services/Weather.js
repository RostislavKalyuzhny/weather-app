export default class Weather {

  getWeather = async (lat, lng) => {
    
    const res = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${ lat }&lon=${ lng }&units=metric&exclude=hourly&lang=ru&appid=98299c85f0194824c133627239975ddb`);

    if (!res.ok) {
      throw new Error(`Error: ${res.status}`);
    }

    return await res.json();
  }

  getShortWeather = async (lat, lng) => {

    const weather = await this.getWeather(lat, lng);

    return weather.daily.map(day => {
      return {
        dt: this._getDateFromUnixTime(day.dt),
        weather: day.weather,
        temp: day.temp,
      };
    });
  }

  _getDateFromUnixTime = (timestamp) => {
  
  const month = ['Январь' , 'Февраль' , 'Март' , 'Апрель' , 'Май' , 'Июнь' , 'Июль' , 'Август' , 'Сентябрь' , 'Октябрь' , 'Ноябрь' , 'Декабрь'];
  const daysOfWeek = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
    
    const date = new Date(timestamp * 1000);
    
    return {
      date : date.getDate(),
      month : month[date.getMonth()],
      weekDay : daysOfWeek[date.getDay()],
    }
  }
}