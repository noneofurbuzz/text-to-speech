import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import { TextProvider } from './context/textContext.tsx'
import { OpenFormProvider } from './context/openFormContext.tsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { FileProvider } from './context/fileContext.tsx'

const queryClient = new QueryClient()
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
    <BrowserRouter>
    <TextProvider>
      <OpenFormProvider>
        <FileProvider>
        <App />
        </FileProvider>
      </OpenFormProvider>
    </TextProvider>
    </BrowserRouter>
    </QueryClientProvider>
  </StrictMode>,
)
