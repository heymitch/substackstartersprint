import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

const withFbPixel = window.location.pathname === '/fb'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App withFbPixel={withFbPixel} />
  </StrictMode>,
)
