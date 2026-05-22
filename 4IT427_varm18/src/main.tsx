import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { WatchlistProvider } from './context/WatchlistContext'
import App from './App'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <WatchlistProvider>
      <App />
    </WatchlistProvider>
  </StrictMode>
)