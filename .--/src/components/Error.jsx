import React from 'react'
import { Link as Anchor } from 'react-router-dom'

export default function Error() {
  return (
    <div className='errorCont'>
      <div className='errorPage'>
        <h1>Page not found</h1>
        <Anchor to="/">
          <button className='homeButton'>
            Go back to main page.
          </button>
        </Anchor>
      </div> 
    </div>
  )
}
