import { StrictMode, useCallback, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import CommetBox from './App.jsx'
import { data } from './data.js';

const App = () => {
  const [comments, setComments] = useState({});
  return <CommetBox commentData={comments} setComments={setComments} />
}



createRoot(document.getElementById('root')).render(
  <StrictMode>

    <App />

  </StrictMode>,
)
