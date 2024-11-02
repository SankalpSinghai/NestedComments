import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { data } from './data.js';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {data.map((commentData) => {
      return <App commentData={commentData} />
    })}
  </StrictMode>,
)
