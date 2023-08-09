import React from 'react'
import { Link as AnchorB } from 'react-router-dom'

export default function Anchor({href, content, classes, icon, size }) {
  return (
    
        <AnchorB to={href}><button type="button" className={classes}><svg xmlns="http://www.w3.org/2000/svg" width={size} fill="currentColor" viewBox="0 0 16 16">
            <path d={icon}/>
            </svg> {content}</button></AnchorB>
  )
}
