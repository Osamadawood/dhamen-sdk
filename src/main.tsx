import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { initPublicAssets } from './utils/assetUrl'
import './styles/fonts.css'
import './index.css'
import App from './App.tsx'

initPublicAssets()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
