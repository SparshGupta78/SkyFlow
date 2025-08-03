import { ThemeProvider } from "./ThemeContext/ThemeProvider";
import { WeatherProvider } from "./WeatherContext/WeatherProvider";

export const AppProvider = ({children}) => {
  return (
    <WeatherProvider>
      <ThemeProvider>
      {children}
      </ThemeProvider>
    </WeatherProvider>
  )
}