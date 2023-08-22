import React, { useEffect, useState } from 'react'
import { getCity } from '../services/eventsQueries'
import {useParams} from 'react-router-dom'
import { Link as AnchorB } from 'react-router-dom'

export default function City() {
  
  const [city, setCity] = useState([])
  const { id } = useParams()

  useEffect(()=>{
    getCity(id)
      .then(answer=> setCity(answer))
      .catch(err => console.log(err))
  }, [])

  return (
    <>
      <h2>{city.name}, from {city.country}</h2>
      <p className='cityDescription'>{city.description}</p>
      <img src={city.image} alt={city.alt}/>
      <p className='underConstruction'>Under Construction</p>
      <AnchorB to="http://127.0.0.1:5173/cities/">
        <button className='cityButton'>
          Return to Cities
        </button>
      </AnchorB>
    </>
  )
}
