import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import Home from './routes/Home'
import NewPerson from './routes/NewPerson'
import { createBrowserRouter,RouterProvider,Route } from 'react-router-dom'

const router = createBrowserRouter([
  {
    element: <App/>,
    children: [
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "/new",
        element: <NewPerson/>,
      },
    ],
  },
]);


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
