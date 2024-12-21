import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import { TextProvider } from './context/textContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
    <TextProvider>
      <App />
    </TextProvider>
    </BrowserRouter>
  </StrictMode>,
)
