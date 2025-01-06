import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import { TextProvider } from './context/textContext.tsx'
import { OpenFormProvider } from './context/openFormContext.tsx'
import { FileProvider } from './context/fileContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
    <TextProvider>
      <OpenFormProvider>
        <FileProvider>
        <App />
        </FileProvider>
      </OpenFormProvider>
    </TextProvider>
    </BrowserRouter>
  </StrictMode>,
)
