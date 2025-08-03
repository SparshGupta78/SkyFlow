import { useContext } from 'react'
import {WeatherContext} from '../contexts/WeatherContext/WeatherContext'

const WeatherBox = () => {

  const {weather, getWeather} = useContext(WeatherContext)
  const weatherIconUrl = 'http:' + weather?.current?.condition?.icon
  
  return (
    <div className='bg-[var(--color-2)] p-4 pt-1 md:px-7.5 md:py-5 rounded-md grow-1 flex max-w-[600px]'>
      <div className='w-full md:flex md:gap-5 lg:gap-10 rounded-md md:justify-evenly'>
        <div>
          <div className="flex items-center justify-between gap-5 lg:min-w-70">
            <div className="text-3xl md:text-4xl lg:text-5xl text-nowrap my-4 md:my-2">
              {weather?.current?.temp_c || '--'} °C
            </div>
            <div className="max-h-[64px] max-w-[64px]">
              {weather?.current?.condition?.icon ? <img src={weatherIconUrl} alt={weather?.current?.condition?.text} /> : ''}
              
            </div>
          </div>
          <div className="text-sm md:text-lg">
            Feels like {weather?.current?.feelslike_c || '--'} °C
          </div>
          <div className="text-base mt-2 mb-5 md:m-0">
            {weather?.current?.condition?.text || '--'}
          </div>
        </div>
        <div className="flex flex-col justify-center gap-2.5 md:gap-2">
          <div className='flex gap-2.5 justify-between flex-wrap md:flex-col md:gap-2'>
            <div className="flex gap-1">
              <div className="flex justify-center">
                <span className="material-symbols-rounded translate-y-[2px]">location_on</span>
              </div>
              <div className='text-xs flex flex-col'>
                <div className='text-nowrap'>
                  <span className='font-bold h-fit'>{weather?.location?.name || '--'}</span>, {weather?.location?.region || '--'}
                </div>
                <div>
                  {weather?.location?.country || '--'}
                </div>
              </div>
            </div>
            <div className="flex items-center gap-1">
              <div className="flex md:items-center justify-center">
                <span className="material-symbols-rounded">language</span>
              </div>
              <div className='text-xs flex align-center gap-[5px]'>
                {weather?.location?.tz_id || '--'}
              </div>
            </div>
          </div>
          <div className="flex gap-2.5 justify-between flex-wrap md:flex-col md:gap-2">
            <div className="flex items-center gap-1">
              <div className="flex justify-center">
                <span className="material-symbols-rounded">arrow_range</span>
              </div>
              <div className='text-xs flex align-center gap-[5px]'>
                <span className='font-bold'>Latitude</span> {weather?.location?.lat || '--'}
              </div>
            </div>
            <div className="flex items-center gap-1">
              <div className="flex justify-center">
                <span className="material-symbols-rounded rotate-90">arrow_range</span>
              </div>
              <div className='text-xs flex align-center gap-[5px]'>
                <span className='font-bold'>Longitude</span> {weather?.location?.lon || '--'}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WeatherBox