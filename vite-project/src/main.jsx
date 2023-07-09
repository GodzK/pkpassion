import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.css'
import {createBrowserRouter,RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element:<home/>
  },
  {
    path: "about",
    element:<about/>
  },
  {
    path: "blog",
    element:<blog/>
  },
  {
    path: "contract",
    element:<contact/>
  },
    
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router = {router}/>
    <App />
  </React.StrictMode>,
)
