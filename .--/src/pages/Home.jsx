import React from 'react'
import Main from '../components/Main'
import Carrousel from '../components/Carrousel'
import { Navigate } from 'react-router-dom'

const Home = () => {
  let token = localStorage.getItem("token")
  
  if(!token){
    return <Navigate to={'/login'}/>
  }
  return (
    <>
    <Main />
    <Carrousel />
    </>
  )
}

export default Home