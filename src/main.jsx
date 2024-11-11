import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import LotoApp from './LotoApp.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <header className='header'>
      <h1>Welcome Lottery Game</h1>
      <p>Please enter your numbers 1 between 20</p>
    </header>
    <LotoApp />
  </StrictMode>,
)
