import React, { useEffect } from 'react'
import {Navigate, useParams, useNavigate} from 'react-router-dom'
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
  useEffect(() =>{
    dispatch(cityActions.filter_cities_by_id(id))
  }, []);
  
  
const navigate = useNavigate();

  return (
    <div className='cityPage'>
      {cityInStore.name == undefined || cityInStore.name == null ?
        <div className='cityContainer'>
          <div className='cityMenu'>
            <button onClick={()=> navigate(-1)} className='goBackButton'>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#454940" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className='goBack'>
                  <path d="M19 12H6M12 5l-7 7 7 7"/>
                </svg>
            </button>
            <div>
                <h1>• Loading</h1>
            </div>
          </div>
          <div className='cityDetailsEmpty'>
            <h2>Loading</h2>
          </div>
          <AnchorB to="/cities/">
            <button className='cityButton'>
              Go back to Cities
            </button>
          </AnchorB>
        </div>
      :
        <div className='cityContainer'>
          <div className='cityMenu'>
              <button onClick={()=> navigate(-1)} className='goBackButton'>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#454940" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className='goBack'>
                  <path d="M19 12H6M12 5l-7 7 7 7"/>
                </svg>
              </button>
              <div>
                <h1>• {cityInStore.name}</h1>
              </div>
          </div>
          <div className='cityDetails'>
            <div className='details'>
              <h2>{cityInStore.name}, {cityInStore.country}</h2>
              <p className='cityDescription'>{cityInStore.description}</p>
              <Itinerary id= {id}/>
            </div>
            <img src={cityInStore.image} alt={cityInStore.alt} className='cityImage'/>
          </div>
          <AnchorB to="/cities/">
            <button className='cityButton'>
              See more cities
            </button>
          </AnchorB>
        </div>
      }
      
    </div>
  )
}
