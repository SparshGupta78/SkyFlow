import { useContext } from "react"
import { WeatherContext } from "../contexts/WeatherContext/WeatherContext"

const Wrapper = () => {

  const {weather, setWeather} = useContext(WeatherContext)

  return (
    <div className="w-full flex flex-wrap flex-col gap-4 md:gap-6 md:flex-row">
      <div className="flex flex-col sm:flex-row md:flex-col gap-4 md:gap-6 grow-1">
        <div className="p-2.5 border-3 border-[var(--color-2)] rounded-md min-w-60 flex flex-col grow-1">
          <div className="text-sm font-semibold uppercase py-1">Temperature</div>
          <div className="p-2 flex flex-col gap-2">
            <div className="text-sm">
              Heat Index <span className="font-light">{weather?.current?.heatindex_c || '--'} °C</span>
            </div>
            <div className="w-full h-[1px] border-1 border-[var(--color-2)]"></div>
            <div className="text-sm">
              Wind Chill <span className="font-light">{weather?.current?.windchill_c || '--'} °C</span>
            </div>
            <div className="w-full h-[1px] border-1 border-[var(--color-2)]"></div>
            <div className="text-sm">
              Dew Point <span className="font-light">{weather?.current?.dewpoint_c || '--'} °C</span>
            </div>
          </div>
        </div>
        <div className="p-2.5 border-3 border-[var(--color-2)] rounded-md min-w-60 flex flex-col grow-1">
          <div className="text-sm font-semibold uppercase py-1">Wind</div>
          <div className="p-2 flex flex-col gap-2">
            <div className="text-sm">
              Speed <span className="font-light">{weather?.current?.wind_kph || '--'} kph</span>
            </div>
            <div className="w-full h-[1px] border-1 border-[var(--color-2)]"></div>
            <div className="text-sm">
              Direction <span className="font-light">{weather?.current?.wind_degree || '--'} °</span>
            </div>
            <div className="w-full h-[1px] border-1 border-[var(--color-2)]"></div>
            <div className="text-sm">
              Gust Speed <span className="font-light">{weather?.current?.gust_kph || '--'} kph</span>
            </div>
          </div>
        </div>
      </div>
      <div className="p-2.5 border-3 border-[var(--color-2)] rounded-md min-w-60 flex flex-col grow-1">
        <div className="text-sm font-semibold uppercase py-1">Atmosphere</div>
        <div className="p-2 flex flex-col gap-2">
            <div className="text-sm">
              Humidity <span className="font-light">{weather?.current?.humidity || '--'}%</span>
            </div>
            <div className="w-full h-[1px] border-1 border-[var(--color-2)]"></div>
            <div className="text-sm">
              Visibility <span className="font-light">{weather?.current?.vis_km || '--'} km</span>
            </div>
            <div className="w-full h-[1px] border-1 border-[var(--color-2)]"></div>
            <div className="text-sm">
              Cloud Cover <span className="font-light">{weather?.current?.cloud || '--'}%</span>
            </div>
            <div className="w-full h-[1px] border-1 border-[var(--color-2)]"></div>
            <div className="text-sm">
              Pressure <span className="font-light">{weather?.current?.pressure_mb || '--'} mb</span>
            </div>
            <div className="w-full h-[1px] border-1 border-[var(--color-2)]"></div>
            <div className="text-sm">
              UV Index <span className="font-light">{weather?.current?.uv || '--'}</span>
            </div>
            <div className="w-full h-[1px] border-1 border-[var(--color-2)]"></div>
            <div className="text-sm">
              Precipitation <span className="font-light">{weather?.current?.precip_mm || '--'} mm</span>
            </div>
        </div>
      </div>
      <div className="flex flex-col gap-4 md:gap-6 grow-1 md:flex-row lg:flex-col">
        <div className="p-2.5 border-3 border-[var(--color-2)] rounded-md min-w-80 flex flex-col grow-1 h-fit">
          <div className="text-sm font-semibold uppercase pt-1 pb-3.5">Air Quality</div>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(80px,1fr))] gap-2.5 items-stretch">
            <div className="bg-[var(--color-2)] h-full p-2.5 flex flex-col items-center justify-between rounded-md">
              <div className="text-xl">{weather?.current?.air_quality?.co || '--'}</div>
              <div className="text-xs font-light">μg/m<sup>3</sup></div>
              <div className="mt-2 text-sm font-semibold">CO</div>
           </div>
            <div className="bg-[var(--color-2)] h-full p-2.5 flex flex-col items-center justify-between rounded-md">
              <div className="text-xl">{weather?.current?.air_quality?.no2 || '--'}</div>
              <div className="text-xs font-light">μg/m<sup>3</sup></div>
              <div className="mt-2 text-sm font-semibold">NO<sub>2</sub></div>
            </div>
            <div className="bg-[var(--color-2)] h-full p-2.5 flex flex-col items-center justify-between rounded-md">
              <div className="text-xl">{weather?.current?.air_quality?.o3 || '--'}</div>
              <div className="text-xs font-light">μg/m<sup>3</sup></div>
              <div className="mt-2 text-sm font-semibold">O<sub>3</sub></div>
            </div>
            <div className="bg-[var(--color-2)] h-full p-2.5 flex flex-col items-center justify-between rounded-md">
              <div className="text-xl">{weather?.current?.air_quality?.so2 || '--'}</div>
              <div className="text-xs">μg/m<sup>3</sup></div>
              <div className="mt-2 text-sm font-semibold">SO<sub>2</sub></div>
            </div>
            <div className="bg-[var(--color-2)] h-full p-2.5 flex flex-col items-center justify-between rounded-md">
              <div className="text-xl">{weather?.current?.air_quality?.['us-epa-index'] || '--'}</div>
              <div className="mt-2 text-sm font-semibold">US AQI</div>
            </div>
            <div className="bg-[var(--color-2)] h-full p-2.5 flex flex-col items-center justify-between rounded-md">
              <div className="text-xl">{weather?.current?.air_quality?.['gb-defra-index'] || '--'}</div>
              <div className="mt-2 text-sm font-semibold">UK AQI</div>
            </div>
            <div className="bg-[var(--color-2)] h-full p-2.5 flex flex-col items-center justify-between rounded-md">
              <div className="text-xl">{weather?.current?.air_quality?.pm2_5 || '--'}</div>
              <div className="mt-2 text-sm font-semibold">PM2.5</div>
            </div>
            <div className="bg-[var(--color-2)] h-full p-2.5 flex flex-col items-center justify-between rounded-md">
              <div className="text-xl">{weather?.current?.air_quality?.pm10 || '--'}</div>
              <div className="mt-2 text-sm font-semibold">PM10</div>
            </div>
          </div>
        </div>
        <div className="border-3 border-[var(--color-2)] rounded-md min-w-60 flex flex-col justify-between grow-1 h-fit">
          <div className="p-2.5 flex flex-col gap-1">
            <div className="text-4xl">
              18:21
            </div>
            <div className="text-sm">
              September 27, 2025
            </div>
          </div>
          <div className="bg-[var(--color-2)] rounded-t-sm px-2 pt-2.5 pb-1.5 text-xs">
            Last Updated at September 27, 2025 18:15
          </div>
        </div>
      </div>
    </div>
  )
}

export default Wrapper