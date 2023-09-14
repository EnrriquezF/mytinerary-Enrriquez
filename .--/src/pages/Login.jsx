import React, { useState } from 'react'
import SignIn from '../components/SignIn'
import SignUp from '../components/SignUp'

export default function Login() {
  let [sign, setSign] = useState(0)
  let handlerSign = ()=>{
    if(sign == 0) {
      setSign(1)
    } else{
      setSign(0)
    }
  }
  
  return (
    <div className='loginCont'>
      <div>
        <button onClick={()=> handlerSign()} className='signInButton signincontainer'><h2>Log in</h2></button>
        <div>
          {sign == 0 && <SignIn/>}
        </div>
      </div>
      <div>
        <button onClick={()=> handlerSign()} className='signUpButton signupcontainer'><h2>Sign up</h2></button>
        <div>
          {sign == 1 && <SignUp/>}
        </div>
      </div>
        
    </div>
  )
}
