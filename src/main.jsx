import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { BrowserRouter } from 'react-router-dom'
import Signin from './components/Signin.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Signin/>
  </BrowserRouter>,
)
