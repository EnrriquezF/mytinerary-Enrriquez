import React, { useState } from 'react'

export default function ViewMore() {
    let [viewMore, setViewMore] = useState(null)
    let a = 0
    let openTabEvents = (a) =>{
        if(viewMore == a) {
          setViewMore(null)
        } else {
          setViewMore(a)
        }
      }
  return (
    <>
        <button onClick={()=>openTabEvents(a)} className='viewMore'>
            {viewMore === a? 'View Less' : 'View More'}
          </button>
          { viewMore === a &&
          (
            <p className='underConstruction'> ... Under Construction</p>
          )
          }
    </>
  )
}
