import { useState, useRef } from 'react'
import axios from 'axios'
import './App.css'
import WeatherInfo from './components/WeatherInfo/WeatherInfo'
import WeatherInfoDays from './components/WeatherInfoDays/WeatherInfoDays'

function App() {
  const [weather, setWeather] = useState()
  const [weatherDays, setWeatherDays] = useState()
  const [suggestions, setSuggestions] = useState([])

  const inputRef = useRef()

  async function searchCity() {
    
    const city = inputRef.current.value
    const key = "552e767a70588d6bebbe88a7fff2a6e7"
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`

    const urlDay = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${key}&lang=pt_br&units=metric`

    const apiInfo = await axios.get(url)

    const apiInfoDay = await axios.get(urlDay)

    setWeatherDays(apiInfoDay.data)
    setWeather(apiInfo.data)

  }
  function handleKeyDown(event) {
    if (event.key === 'Enter') {
      searchCity()
    }
  }

  return (
    <div className='container'>
      <h1>Previsão do Tempo</h1>
      <input ref={inputRef} type="text" placeholder="Digite o nome da cidade" onKeyDown={handleKeyDown} />
      <button onClick={searchCity}>Buscar</button>

      {weather && <WeatherInfo weather={weather}/>}
      {weatherDays && <WeatherInfoDays weatherDays={weatherDays}/>}

    </div>
  )
}

export default App
