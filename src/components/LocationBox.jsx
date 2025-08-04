import { useRef, useEffect, useContext, useState } from 'react'
import { WeatherContext } from '../contexts/WeatherContext/WeatherContext'

const LocationBox = () => {

  const [value, setValue] = useState('')
  const {weather, getWeather} = useContext(WeatherContext)

  const setWeathy = () => {
    const val = value.trim()
    if (val !== '') {
      getWeather(val)
      setValue('')
    }
  }

  const suggestionBtns = useRef([])

  useEffect(() => {

      const suggHandle = (e) => {
        setValue(e.target.dataset['val'])
      }

    suggestionBtns.current.forEach(btn => {
      if (btn) btn.addEventListener('click', suggHandle)
    })
  }, [])

  return (
    <div className='sm:p-2.5 sm:pb-1.5 border-[var(--color-2)] border-3 rounded-md sm:min-w-[300px] md:max-w-[450px] h-fit flex flex-col grow-1'>
      <div className='bg-[var(--color-2)] flex items-center gap-1.5 px-2.5 py-2 md:rounded-sm'>
        <input value={value} onChange={(e) => setValue(e.target.value)} placeholder='Enter location' type="text" className='w-full text-sm outline-none placeholder:text-[var(--color-3)]' />
        <button type='button' onClick={setWeathy} className='flex items-center aspect-square outline-none cursor-pointer hover:opacity-60 active:opacity-60'>
          <span className="material-symbols-rounded flex items-center justify-center aspect-square select-none">search</span>
        </button>
      </div>
      <div className='mt-2 hidden sm:block'>
        <div className='p-2 flex items-center justify-between gap-2'>
          <div className='text-sm'>
            New Delhi
          </div>
          <span data-val="New Delhi" ref={e => e && (suggestionBtns.current[0] = e)} className="material-symbols-rounded flex items-center justify-center select-none cursor-pointer hover:opacity-60">arrow_insert</span>
        </div>
        <div className="w-full h-[1px] border-1 border-[var(--color-2)]"></div>
        <div className='p-2 flex items-center justify-between gap-2'>
          <div className='text-sm'>
            Mumbai
          </div>
          <span data-val="Mumbai" ref={e => e && (suggestionBtns.current[1] = e)} className="material-symbols-rounded flex items-center justify-center select-none cursor-pointer hover:opacity-60">arrow_insert</span>
        </div>
        <div className="w-full h-[1px] border-1 border-[var(--color-2)]"></div>
        <div className='p-2 flex items-center justify-between gap-2'>
          <div className='text-sm'>
            Nagpur
          </div>
          <span data-val="Nagpur" ref={e => e && (suggestionBtns.current[2] = e)} className="material-symbols-rounded flex items-center justify-center select-none cursor-pointer hover:opacity-60">arrow_insert</span>
        </div>
      </div>
    </div>
  )
}

export default LocationBox