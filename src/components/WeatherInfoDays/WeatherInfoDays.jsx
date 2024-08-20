import './WeatherInfoDays.css'

function WeatherInfoDays ({weatherDays}){

  let dailyForecast = {

  }

  for(let forecast of weatherDays.list){
    const date = new Date( forecast.dt * 1000).toLocaleDateString()

    if(!dailyForecast[date]){
      dailyForecast[date] = forecast  
    }
  }

  const next5Days = Object.values(dailyForecast).slice(1,6)

  function convertDate(date) {
    const newDate = new Date(date.dt * 1000).toLocaleDateString('pt-BR', {weekday:'short'}) 
    return newDate
  }

  return(
    <div className="weather-container">
      <h3>Previsão para os próximos 5 dias</h3>
      <div className="weather-list">
        {next5Days.map(forecast =>(
          <div key={forecast.dt} className="weather-Item">
            <p className='forecast-day'>{convertDate(forecast)}</p>
            
            <img src={`http://openweathermap.org/img/wn/${forecast.weather[0].icon}.png`} />
            <p className='forecast-description'>{forecast.weather[0].description}</p>
            <p className='forecast-temp'>{Math.round (forecast.main.temp_min)}ºC min / {Math.round (forecast.main.temp_max)}ºC máx</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default WeatherInfoDays