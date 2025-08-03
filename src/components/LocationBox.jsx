const LocationBox = () => {
  return (
    <div className='sm:p-2.5 border-[var(--color-2)] border-3 rounded-md sm:min-w-[300px] md:max-w-[450px] h-fit flex flex-col grow-1'>
      <div className='bg-[var(--color-2)] flex items-center gap-1.5 p-2 md:rounded-sm'>
        <span className="material-symbols-rounded flex items-center justify-center">search</span>
        <input name='iurefd' placeholder='Enter location' type="text" className='text-sm outline-none placeholder:text-[var(--color-3)]' />
      </div>
      <div className='mt-2.5 hidden sm:block'>
        <div className='p-1.5 flex items-center justify-between gap-2'>
          <div className='text-sm'>
            New Delhi
          </div>
          <span className="material-symbols-rounded flex items-center justify-center">arrow_insert</span>
        </div>
        <div className="w-full h-[1px] border-1 border-[var(--color-2)]"></div>
        <div className='p-1.5 flex items-center justify-between gap-2'>
          <div className='text-sm'>
            Mumbai
          </div>
          <span className="material-symbols-rounded flex items-center justify-center">arrow_insert</span>
        </div>
        <div className="w-full h-[1px] border-1 border-[var(--color-2)]"></div>
        <div className='p-1.5 flex items-center justify-between gap-2'>
          <div className='text-sm'>
            Nagpur
          </div>
          <span className="material-symbols-rounded flex items-center justify-center">arrow_insert</span>
        </div>
      </div>
    </div>
  )
}

export default LocationBox