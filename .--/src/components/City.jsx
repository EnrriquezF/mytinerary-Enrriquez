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
  useEffect(() =>{
    dispatch(cityActions.filter_cities_by_id(id))
  }, []);

  return (
    <div className='cityPage'>{cityInStore.name == undefined || cityInStore.name == null ?
      <div className='cityContainer'>
        <div>
            <h1>Loading</h1>
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
        <div>
            <h1>• {cityInStore.name}</h1>
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
            Go back to Cities
          </button>
        </AnchorB>
      </div>
    }
      
    </div>
  )
}
