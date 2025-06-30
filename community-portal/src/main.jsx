import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import CommunityPortal from './CommunityPortal.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CommunityPortal />
  </StrictMode>,
)
