import { createRoot } from 'react-dom/client'
import "./main.css"
import App from './App.jsx'
import { AppProvider } from './contexts/AppProvider.jsx'

createRoot(document.getElementById('root')).render(
    <AppProvider>
      <App />
    </AppProvider>
)