import React from 'react'
import Main from '../components/Main'
import Carrousel from '../components/Carrousel'
import { Navigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'

const Home = () => {
  let token = localStorage.getItem("token")
  let verification= localStorage.getItem('verificated')
  const dispatch = useDispatch()
  
  if(!token&& !verification){
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