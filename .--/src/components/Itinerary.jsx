import React, { useEffect, useState } from 'react'
import itineraryActions from '../store/actions/itineraries';
import { useDispatch, useSelector } from 'react-redux';

export default function Itinerary(id) {
  let itineraryInStore = useSelector(store => store.itinerariesReducer.itinerary)
  let dispatch = useDispatch()

  let [viewMore, setViewMore] = useState(null)

  let openTabEvents = (index) =>{
    if(viewMore == index) {
      setViewMore(null)
    } else {
      setViewMore(index)
    }
  }
 
  useEffect(() =>{
    dispatch(itineraryActions.filter_itineraries_by_city_id(id))
  }, []);

  return (
    <div className='itineraryCities'>
      <h2>Itineraries</h2>
      <div>
      {itineraryInStore.length > 0?
      <div className='itinerary'>
      {itineraryInStore.map((data, index) =>(
      <div key={index}>
        <h3>• {data.name}</h3>
        <div className="itineraryProperty">
          {data.hashtags.map((hashtag, wordIndex)=>(<p key={wordIndex}>#{hashtag}</p>))}
        </div>
        <div className="itineraryProperty"><h4>Duration: </h4> {data.duration} hour(s).</div>
        <div className="itineraryProperty"><h4>Price: </h4> ${data.price} <img src ="/bill.png" alt="bill icon" className='billIcon'/></div>
        <div className="itineraryProperty"><h4>Likes: </h4> {data.likes}.</div>
        <button onClick={()=>openTabEvents(index)} className='viewMore'>
          {viewMore === index? 'View Less' : 'View More'}
        </button>
        { viewMore === index &&
        (
          <p className='underConstruction'> ... Under Construction</p>
        )
        }
      </div>
      ))}</div>
      :<h2 className='noItinerary'>There is not any itinerary to show</h2>
      }
      </div>
    </div>
  )
}
