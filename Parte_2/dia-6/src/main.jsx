import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import GlobalStyle from './css/GlobalStyle.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* chamando a estilização global */}
    <GlobalStyle/>
    <App />
  </StrictMode>,
)
