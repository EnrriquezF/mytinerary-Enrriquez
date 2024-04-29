import React, { useState } from 'react'
import SignIn from '../components/SignIn'
import SignUp from '../components/SignUp'
import { Navigate } from 'react-router-dom'

export default function Login() {
  let [sign, setSign] = useState(0)
  let handlerSign = ()=>{
    if(sign == 0) {
      setSign(1)
    } else{
      setSign(0)
    }
  }
  
  const verification = localStorage.getItem('verified')
  const token = localStorage.getItem('token')
  if(token && verification){
    return <Navigate to={'/'}/>
  }
  
  return (
    <div className='loginCont'>
          {sign == 0 && <div className='loginPage'>
        <h1>Sign in</h1>
        <div className='loginInterface'>
          <SignIn/>
          <p onClick={()=> handlerSign()}>Don't have an account? Sign UP !!</p>
        </div>
      </div>}
          
      
      
          {sign == 1 && <div  className='loginPage'>
        <h1>Sign up</h1>
        <div className='loginInterface'>
          <SignUp/>
          <p onClick={()=> handlerSign()}>Do you already have an account? Sign in !!</p>
        </div>
      </div>}
          
    </div>
  )
}
