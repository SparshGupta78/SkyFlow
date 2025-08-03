import { useEffect, useState } from "react";
import { WeatherContext } from "./WeatherContext";

export const WeatherProvider = ({children}) => {
  const [weather, setWeather] = useState(null)

  const getWeather = (loc = 'Mumbai') => {
    fetch(`https://api.weatherapi.com/v1/current.json?key=55e13ac43ad541eea49124401252707&q=${loc}&aqi=yes`)
    .then(res => res.json())
    .then(data => setWeather(data))
  }

  useEffect(() => {
    getWeather()
  }, [])

  return (
    <WeatherContext.Provider value={{weather, getWeather}}>
      {children}
    </WeatherContext.Provider>
  )
}