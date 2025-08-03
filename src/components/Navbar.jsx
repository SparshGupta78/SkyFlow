import { useContext, useRef, useEffect } from 'react';
import { ThemeContext } from '../contexts/ThemeContext/ThemeContext';
import { WeatherContext } from '../contexts/WeatherContext/WeatherContext';

const Navbar = () => {
  const { theme, toggleTheme, setTheme } = useContext(ThemeContext);
  const { weather, setWeather } = useContext(WeatherContext);

  const themeRef = useRef(null);
  const themeBoxRef = useRef(null);
  const themeBtnsRef = useRef([]);

  useEffect(() => {
    const handleThemeClick = () => {
      themeRef.current.classList.toggle('bg-[var(--color-2)]');
      themeBoxRef.current.classList.toggle('hidden');
      themeBoxRef.current.classList.toggle('flex');
    };

    const handleWindowClick = (e) => {
      if (
        themeRef.current &&
        themeBoxRef.current &&
        !themeRef.current.contains(e.target) &&
        !themeBoxRef.current.contains(e.target)
      ) {
        themeRef.current.classList.remove('bg-[var(--color-2)]');
        themeBoxRef.current.classList.add('hidden');
        themeBoxRef.current.classList.remove('flex');
      }
    };

    const handleBtnClick = (e) => {
      themeBtnsRef.current.forEach((btn) => {
        btn.classList.remove('bg-[var(--color-2)]');
        btn.classList.add('hover:opacity-60', 'active:opacity-60');
      });

      e.target.classList.add('bg-[var(--color-2)]');
      e.target.classList.remove('hover:opacity-60', 'active:opacity-60');

      const mode = e.target.dataset['mode'];
      if (mode !== 'auto') {
        setTheme(mode);
      } else {
        if (weather?.current?.is_day && theme !== 'light') {
          setTheme('light');
        } else if (!(weather?.current?.is_day) && theme !== 'dark') {
          setTheme('dark');
        }
      }
    };

    themeRef.current.addEventListener('click', handleThemeClick);
    window.addEventListener('click', handleWindowClick);
    themeBtnsRef.current.forEach((btn) => {
      btn.addEventListener('click', handleBtnClick);
    });

    return () => {
      themeRef.current.removeEventListener('click', handleThemeClick);
      window.removeEventListener('click', handleWindowClick);
      themeBtnsRef.current.forEach((btn) => {
        btn.removeEventListener('click', handleBtnClick);
      });
    };
  }, [theme, weather, setTheme]);

  return (
    <div className='fixed z-100 top-0 w-full h-fit px-4 py-1 flex items-center justify-between gap-2.5 backdrop-blur-md'>
      <div className="p-2 text-xl">SkyFlow</div>
      <div className='flex items-center gap-0.5'>
        <button type="button" className='rounded-full p-2 flex hover:bg-[var(--color-2)] active:bg-[var(--color-2)] cursor-pointer duration-200'>
          <span className="material-symbols-rounded">architecture</span>
        </button>
        <button ref={themeRef} type="button" className='rounded-full p-2 flex hover:bg-[var(--color-2)] active:bg-[var(--color-2)] cursor-pointer duration-200'>
          <span className="material-symbols-rounded">clear_day</span>
        </button>
        <div ref={themeBoxRef} className="absolute top-14 right-4 bg-[var(--color-1)] rounded-md border-2 border-[var(--color-2)] hidden">
          <div className='absolute top-[-8px] right-2 bg-[var(--color-2)] w-4 h-4 rotate-z-45 z-0'></div>
          <div className='bg-[var(--color-1)] p-1 flex gap-1 rounded-md z-100'>
            <button ref={el => el && (themeBtnsRef.current[0] = el)} type='button' className="text-sm bg-[var(--color-2)] px-3.5 py-1.5 rounded-md select-none cursor-pointer" data-mode="auto">Auto</button>
            <button ref={el => el && (themeBtnsRef.current[1] = el)} type='button' className="text-sm px-3.5 py-1.5 rounded-md hover:opacity-60 active:opacity-60 select-none cursor-pointer" data-mode="light">Light</button>
            <button ref={el => el && (themeBtnsRef.current[2] = el)} type='button' className="text-sm px-3.5 py-1.5 rounded-md hover:opacity-60 active:opacity-60 select-none cursor-pointer" data-mode="dark">Dark</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
