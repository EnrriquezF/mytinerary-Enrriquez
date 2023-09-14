import React, { useRef } from 'react'
import { useDispatch } from 'react-redux';
import userActions from '../store/actions/users';
import { GoogleLogin } from '@react-oauth/google';
import jwtDecode from 'jwt-decode'

export default function SignUp() {
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const nameInputRef = useRef();
  const lastNameInputRef = useRef();
  const photoURLInputRef = useRef();
  const countryInputRef = useRef();

  const userRegistration = {
    email: emailInputRef,
    password: passwordInputRef,
    name: nameInputRef,
    lastName: lastNameInputRef,
    photoURL: photoURLInputRef,
    country: countryInputRef
  }

  const dispatch = useDispatch();

  const handlerSignIn = async (e) =>{
    e.preventDefault();
    userRegistration.email = emailInputRef.current.value;
    userRegistration.password = passwordInputRef.current.value;
    userRegistration.name = nameInputRef.current.value;
    userRegistration.lastName = lastNameInputRef.current.value;
    userRegistration.photoURL = photoURLInputRef.current.value;
    userRegistration.country = countryInputRef.current.value

    return dispatch(userActions.register(userRegistration))
  }

  const signUpGoogle = async ( credentialResponse)=> {
    const dataUser = jwtDecode(credentialResponse.credential)
    let newUser = {
      email : dataUser.email,
      password :dataUser.given_name+dataUser.sub,
      name : dataUser.given_name,
      lastName : dataUser.family_name,
      photoURL : dataUser.picture,
      country : "",
    }
    

    console.table(userRegistration);
    dispatch(userActions.register(newUser))

    await dispatch(userActions.login_user({email: newUser.email, password: newUser.password}))
  }
  
  return (
    <div>
      <form onSubmit={handlerSignIn} className='signupcontainer'>
        <label className='signingelement labelSign'>Email:
          <input type='email' ref={emailInputRef} required/>
        </label>
        <label className='signingelement labelSign'>Password:
          <input type='password' ref={passwordInputRef} required/>
        </label>
        <label className='signingelement labelSign'>Name:
          <input type='text' ref={nameInputRef} required/>
        </label>
        <label className='signingelement labelSign'>Last name:
          <input type='text' ref={lastNameInputRef} required/>
        </label>
        <label className='signingelement labelSign'>PhotoURL:
          <input type='url' ref={photoURLInputRef}/>
        </label>
        <label className='signingelement labelSign'>Choose a Country:
          <select ref={countryInputRef} required>
            <option value="">Select a country</option>
            <option value="Argentina">Argentina</option>
            <option value="Chile">Chile</option>
            <option value="Colombia">Colombia</option>
            <option value="Costa Rica">Costa Rica</option>
            <option value="Mexico">Mexico</option>
            <option value="Paraguay">Paraguay</option>
            <option value="Peru">Peru</option>
            <option value="Uruguay">Uruguay</option>
          </select> 
        </label>
        <button className='signUpButton signingelement'>Sign UP</button>
          <GoogleLogin className="googleElem"
          text='signup_with'
            onSuccess={credentialResponse => {
              console.log(credentialResponse);
              console.log(jwtDecode(credentialResponse.credential));
              signUpGoogle(credentialResponse)
            }}
            onError={() => {
              console.log('Login Failed');
            }}
          />
      </form>
    </div>
  )
}
