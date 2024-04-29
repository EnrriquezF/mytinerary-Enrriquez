import React from 'react'
import Nav from './Nav'

import { Link as AnchorB } from 'react-router-dom'

export default function Header() {
  return (
    <header className='header'>
      <div className="">
        <AnchorB to="/"><h2 className='home'>MyTinerary</h2></AnchorB>
      </div>
      <Nav/>
      </header>
  )
}
