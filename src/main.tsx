import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from './app/providers/index.tsx'
import './app/styles/index.css'
import App from './app/App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider>
      <App />
    </Provider>
  </StrictMode>,
)
