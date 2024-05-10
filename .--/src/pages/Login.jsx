import React, { useState } from 'react'
import SignIn from '../components/SignIn'
import SignUp from '../components/SignUp'
import { Navigate, useNavigate } from 'react-router-dom'

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

  let navigate = useNavigate()
  
  return (
    <div className='loginCont'>
          {sign == 0 && <div className='loginPage'>
        <div className='loginMenu'>
          <button onClick={()=> navigate(-1)} className='goBackButton'>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#454940" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className='goBack'>
              <path d="M19 12H6M12 5l-7 7 7 7"/>
            </svg>
          </button>
          <h1>Sign in</h1>
        </div>
        <div className='loginInterface'>
          <SignIn/>
          <p onClick={()=> handlerSign()}>Don't have an account? Sign UP !!</p>
        </div>
      </div>}
          
      
      
          {sign == 1 && <div  className='loginPage'>
        <div className='loginMenu'>
          <button onClick={()=> navigate(-1)} className='goBackButton'>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#454940" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className='goBack'>
              <path d="M19 12H6M12 5l-7 7 7 7"/>
            </svg>
          </button>
          <h1>Sign up</h1>
        </div>
        <div className='loginInterface'>
          <SignUp/>
          <p onClick={()=> handlerSign()}>Do you already have an account? Sign in !!</p>
        </div>
      </div>}
          
    </div>
  )
}
