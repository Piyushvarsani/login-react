import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import SignUp from './SignUp.jsx'
import Login from './login.jsx'
import Home from './Home.jsx'
import Error from './Error.jsx'

import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom"
import Layout from './Layout.jsx'

const root = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='' element={<Layout />} >
        <Route index element={<Login />} />
        <Route path='/' element={<Home />} />
        <Route path='login' element={<Login />} />
        <Route path='signup' element={<SignUp />} />
        <Route path='*' element={<Error />} />
      </Route>
    </>
  ))

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={root} />
  </React.StrictMode>,
)
