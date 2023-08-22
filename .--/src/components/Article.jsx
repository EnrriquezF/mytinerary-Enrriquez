import React from 'react'
import { Link as AnchorB} from 'react-router-dom'

export default function Article({ title, paragraph, link }) {
  return (
    <article className='col-lg-6 '>
    <h2 className='fw-bold text-start'>
      {title}
    </h2>
    <p className='text-start'>
      {paragraph}
    </p>
    <AnchorB to={link}><button type="button" className="citiesButton">Watch our cities options</button></AnchorB>
  </article>
  )
}
