import React from 'react'
import Anchor from './Anchor'
import { useDispatch, useSelector } from 'react-redux';
import userActions from '../store/actions/users'
import { useNavigate } from 'react-router-dom';


export default function Nav() {
  let navigate = useNavigate()
    let dispatch = useDispatch();
    const SignOut = async (e) =>{
      e.preventDefault();
      dispatch(userActions.sign_out()).then(()=>{
        setTimeout(()=>{
          navigate('/login')
        }, 1500)
        
      }).catch(e)((()=>setTimeout(()=>{
          navigate('/login')
        }, 1)));
    }
    const verification = localStorage.getItem('verified')
    let token = localStorage.getItem("token")
    return (
      <nav className="options title col-lg-3 px3">
        {verification && token ? 
        <div className='navbar'><Anchor href='/' content="Home"classes="navButton" size="1" />
        <Anchor href='/cities' content="Cities"classes="citiesButton navButton" size="1" />
        <form onSubmit={SignOut} className='signOut'>
          <button  className="signOutButton">Sign out</button>
        </form></div>
        :
        <div className='navbar'><Anchor href='/' content="Home"classes="navButton" icon="" size="1" />
      <Anchor href='/cities' content="Cities"classes="citiesButton navButton" icon="" size="1" />
      <Anchor href="/login"content="Sign In"classes="loginButton navButton" icon="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" size="16" /></div>}
        
      </nav>
    )
}
