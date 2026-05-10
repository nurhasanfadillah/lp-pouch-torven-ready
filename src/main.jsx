import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { trackConversion, trackCallConversion } from './lib/tracking.js'

document.addEventListener('click', (e) => {
  const waAnchor = e.target.closest('a[href*="wa.me"]')
  if (waAnchor) trackConversion()

  const telAnchor = e.target.closest('a[href^="tel:"]')
  if (telAnchor) {
    e.preventDefault()
    trackCallConversion(telAnchor.href)
  }
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)