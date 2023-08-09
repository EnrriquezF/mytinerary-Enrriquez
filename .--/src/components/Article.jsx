import React from 'react'

export default function Article({ title, paragraph, link }) {
  return (
    <article className='col-lg-6 '>
    <h2 className='fw-bold text-start'>
      {title}
    </h2>
    <p className='text-start'>
      {paragraph}
    </p>
    <a href={link}><button type="button" className="citiesButton">Watch our cities options</button></a>
  </article>
  )
}
