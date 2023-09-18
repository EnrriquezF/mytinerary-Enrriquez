import React, { useEffect } from 'react'
import {Navigate, useParams} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Link as AnchorB } from 'react-router-dom'
import cityActions from '../store/actions/cities'
import Itinerary from './Itinerary'
import userActions from '../store/actions/users'

export default function City() {
  const {id}  = useParams()
  let cityInStore = useSelector(store => store.citiesReducer.cities)
  let dispatch = useDispatch()
  let verification = localStorage.getItem('verified')
  let token = localStorage.getItem("token")
  
  if(!token&& !verification){
    return <Navigate to={'/login'}/>
  }else if (token && !verification) {
    dispatch(userActions.sign_out())
    return <Navigate to={'/login'}/>
  }
 

  useEffect(() =>{
    dispatch(cityActions.filter_cities_by_id(id))
  }, []);

  let itineraries = cityInStore.itineraries;
  return (
    <div className='cityPage'>
      <div className='cityDetails'>
        <div className='details'>
          <h2>{cityInStore.name}, from {cityInStore.country}</h2>
          <p className='cityDescription'>{cityInStore.description}</p>
          <img src={cityInStore.image} alt={cityInStore.alt} className='cityImage'/>
        </div>
        <Itinerary id= {id}/>
      </div>
      
      <AnchorB to="/cities/">
        <button className='cityButton cityButtonSp'>
          Go back to Cities
        </button>
      </AnchorB>
    </div>
  )
}
