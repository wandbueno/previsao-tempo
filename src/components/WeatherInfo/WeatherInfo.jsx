import './WeatherInfo.css'

function WeatherInfo ({weather}){
  console.log(weather)
  return(
    <div className="weathe-container">
      <h2>{weather.name}</h2>
      <div className="weather-info">
        <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}.png`} />
        <p className="weather-temperature">{Math.round (weather.main.temp)}ºC</p>
      </div>
      <p className="weather-description">{weather.weather[0].description}</p>
     
      <div className='weather-details'>
        <p>Sensação Térmica: {Math.round (weather.main.feels_like)}ºC</p>
        <p>Umidade: {weather.main.humidity}%</p>
        <p>Pressão: {weather.main.pressure}</p>
      </div>
    </div>
  )
}

export default WeatherInfo