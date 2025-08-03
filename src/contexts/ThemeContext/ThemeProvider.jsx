import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "./ThemeContext";
import { WeatherContext } from "../WeatherContext/WeatherContext";

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(null);
  const { weather } = useContext(WeatherContext);

  useEffect(() => {
    if (weather?.current?.is_day !== undefined) {
      const isDay = weather.current.is_day;
      const initialTheme = isDay === 1 ? 'light' : 'dark';
      setTheme(initialTheme);
    }
  }, [weather]);

  useEffect(() => {
    if (theme) {
      document.documentElement.classList.add(theme);
      return () => document.documentElement.classList.remove(theme);
    }
  }, [theme]);

  const toggleTheme = () => {
    const nextTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(nextTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
