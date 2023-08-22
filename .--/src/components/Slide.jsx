import React from 'react'

export default function Slide( {imageFile, imageAlt, imageName, imageCountry}) {
  return (
    <div className='carrImageCont'>
        <div>
            <img src={imageFile} alt={imageAlt} className='carrouselImage'/>
        </div>
        <p>{imageName}, {imageCountry}</p>
    </div>
  )
}
