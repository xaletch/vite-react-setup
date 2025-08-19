import { createRoot } from 'react-dom/client'
import { Provider } from './app/providers'
import '@/app/styles/index.css'
import App from '@/app/App'

createRoot(document.getElementById('root')!).render(
  <Provider>
    <App />
  </Provider>
)
