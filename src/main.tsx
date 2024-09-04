import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Content } from './components/Content.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App>
      <Content/>
    </App>
  </StrictMode>,
)
