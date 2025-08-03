import WeatherBox from './WeatherBox'
import LocationBox from './LocationBox'
import Wrapper from './Wrapper'

const Front = () => {
  return (
    <div className='pt-14 px-4 pb-4 flex flex-col gap-4 md:gap-6 max-w-[1100px] mx-auto'>
      <div className="w-full flex flex-col-reverse sm:flex-row gap-4 md:gap-6 justify-center">
        <WeatherBox />
        <LocationBox />
      </div>
      <div className="w-full">
        <Wrapper />
      </div>
    </div>
  )
}

export default Front