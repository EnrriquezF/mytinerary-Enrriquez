import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import userActions from '../store/actions/users'
import { GoogleLogin } from '@react-oauth/google';
import jwtDecode from 'jwt-decode';
import { useNavigate } from 'react-router-dom';

export default function SignIn() {
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const userInStorage = useSelector(store => store.userReducer.user)
  const dispatch = useDispatch()

  let navigate = useNavigate()
  const user = {
    email: emailInputRef,
    password: passwordInputRef
  }
  

  const handlerSignIn = async (e) =>{
    e.preventDefault();
    user.email = emailInputRef.current.value
    user.password = passwordInputRef.current.value
    dispatch(userActions.login_user(user)).then(()=> { navigate("/")})
  }

  const signInGoogle = (credentialResponse)=> {
    const dataUser = jwtDecode(credentialResponse.credential)
    let user = {
      email : dataUser.email,
      password :dataUser.given_name+dataUser.sub,
    }
    dispatch(userActions.login_user(user)).then(()=> { navigate("/")})
  }

  return (
    <div>
    <form onSubmit={handlerSignIn} className='signincontainer'>
        <div>
            <label className='signingelement labelSign'>Email Address:
                <input type='email' ref={emailInputRef}/>
            </label>
        </div>
        
        <div>
            <label className='signingelement labelSign'>Password:
                <input type='password' ref={passwordInputRef}/>
            </label>
        </div>
        <button className='signInButton signingelement'>Sign in</button>
          <GoogleLogin 
            text='signin_with'
            onSuccess={credentialResponse => {signInGoogle(credentialResponse)}}
            onError={() => {
              console.log('Login Failed');
            }}
          />
    </form>
    </div>
  )
}
