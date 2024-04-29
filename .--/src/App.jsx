/* import { useState } from 'react' */
import React, { useEffect } from 'react'
import Layout from './layouts/Layout'
//import './App.css'
import Home from './pages/Home'
import Cities from './pages/Cities'
import City from './components/City'
import Info from './components/Info'
import Error from './components/Error'

import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import Login from './pages/Login'
import { useDispatch } from 'react-redux'
import userActions from './store/actions/users'
 
const router = createBrowserRouter([
  {path:'/', element: <Layout/>,
    children: [
      {path: '/', element:<Home />},
      {path: '/cities', element: <Cities/>},
      {path: '/city/:id', element: <City />},
      {path: '/login', element: <Login/>},
      {path: '/info',  element: <Info />},
      {path: '*',  element: <Error />}
    ]
  }
])

function App() {
  let dispatch = useDispatch();
  useEffect(()=>{
    dispatch(userActions.authenticate()).then((()=> localStorage.setItem('verified', true)))
  })
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
