import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { AppWrapper } from './hooks/context'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <AppWrapper>
    <App/>
    </AppWrapper>
  </React.StrictMode>,
)
