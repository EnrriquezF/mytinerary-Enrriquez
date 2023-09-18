import React from 'react'
import { Link as AnchorB } from 'react-router-dom'

export default function CityCard({ name, country, description, image, alt, link }) {
  return (<>
    <div className="divCard">
        <img src={image} alt={alt} className="imgCityCard"/>
        <h4>{name}, {country}</h4>
        <p>{description}</p>
        <AnchorB to={"/city/"+link} className='divBottom'>
            <button className='cityButton'>See City</button>
        </AnchorB>
    </div></>
  )
}
