import React, { useEffect, useState } from 'react'
import Slide from './Slide'
import { useDispatch, useSelector } from 'react-redux'
import cityActions from '../store/actions/cities'
import { Link as Anchor } from 'react-router-dom'

export default function Carrousel() {

  let citiesInStore = useSelector(store => store.citiesReducer.cities)

  let dispatch = useDispatch()
  
  
  useEffect(() =>{
    dispatch(cityActions.get_cities())
  }, []);
  //let data1=[]
  let data1=[citiesInStore[0], citiesInStore[1], citiesInStore[2], citiesInStore[3]]
  let data2=[citiesInStore[4], citiesInStore[5], citiesInStore[6], citiesInStore[7]]
  let data3=[citiesInStore[8], citiesInStore[9], citiesInStore[10], citiesInStore[11]]
  let data4=[citiesInStore[12], citiesInStore[13], citiesInStore[14]]
  /* let data1=[{
    key: "NYC",
    imageFile: "/tourist-destinations/01.png",
    imageAlt: "Manhattan Bridge",
    imageName: "New York City",
    imageCountry: "USA"
  },
  {
    key: "Paris",
    imageFile: "tourist-destinations/02.png",
    imageAlt: "Eiffel Tower",
    imageName: "Paris",
    imageCountry: "France"
  },
  {
    key: "India",
    imageFile: "tourist-destinations/03.png",
    imageAlt: "Taj Mahal",
    imageName: "Agra",
    imageCountry: "India"
  },
  {
    key: "Moscow",
    imageFile: "tourist-destinations/04.png",
    imageAlt: "Saint Basil's Cathedral",
    imageName: "Moscow",
    imageCountry: "Russia"
  }]
  let data2=[{
    key: "Krabi",
    imageFile: "/tourist-destinations/05.png",
    imageAlt: "Krabi Beach",
    imageName: "Krabi",
    imageCountry: "Thailand"
  },
  {
    key: "Rome",
    imageFile: "tourist-destinations/06.png",
    imageAlt: "The Colosseum",
    imageName: "Rome",
    imageCountry: "Italy"
  },
  {
    key: "Ho Chi Minh",
    imageFile: "tourist-destinations/07.png",
    imageAlt: "Bridge during Lunar New Year",
    imageName: "Ho Chi Minh",
    imageCountry: "Taiwan"
  },
  {
    key: "Venice",
    imageFile: "tourist-destinations/08.png",
    imageAlt: "Venice Canal",
    imageName: "Venice",
    imageCountry: "Italy"
  }]
  let data3=[{
    key: "London",
    imageFile: "/tourist-destinations/09.png",
    imageAlt: "Big Ben and London Eye",
    imageName: "London",
    imageCountry: "England"
  },
  {
    key: "Cusco",
    imageFile: "tourist-destinations/10.png",
    imageAlt: "Machu Picchu",
    imageName: "Cusco",
    imageCountry: "Peru"
  },
  {
    key: "Buenos Aires",
    imageFile: "tourist-destinations/11.png",
    imageAlt: "Obelisco of Buenos Aires",
    imageName: "Buenos Aires",
    imageCountry: "Argentina"
  },
  {
    key: "Sydney",
    imageFile: "tourist-destinations/12.png",
    imageAlt: "Sydney Opera House",
    imageName: "Sydney",
    imageCountry: "Australia"
  }] */
    let [carrousel, setCarrousel] = useState(1);

    let handlerBack = () => {
      if(carrousel !=1) {
        setCarrousel(carrousel - 1);
      } else {
        setCarrousel(3)
      }
    }
  
    let handlerNext = () => {
      if(carrousel != 4) {
        setCarrousel(carrousel+1);
      } else {
        setCarrousel(1)
      }
    }
  
    useEffect(()=>{
      setInterval(()=>{handlerNext()}, 6000)
    },[carrousel])
    
    return (
      <div className='containerCarr'>
        <button className='carrButton' onClick={()=>handlerBack()}>&lt;</button>
        <div>
            {citiesInStore.length > 1?
            <div className='containerFlex'>
            
            {carrousel == 1 && 
              <div className='carrouselDiv'>
                {data1.map((dataImage,index)=><Anchor to={"http://localhost:5173/city/"+dataImage._id}><Slide key={index} imageFile={dataImage.image} imageAlt={dataImage.alt} imageName={dataImage.name} imageCountry={dataImage.country}></Slide></Anchor>)}
              </div>
            }
            {carrousel == 2 && 
              <div className='carrouselDiv'>
              {data2.map((dataImage, index)=><Anchor to={"http://localhost:5173/city/"+dataImage._id}><Slide key={index} imageFile={dataImage.image} imageAlt={dataImage.alt} imageName={dataImage.name} imageCountry={dataImage.country}></Slide></Anchor>)}
            </div>
            }
            {carrousel == 3 && 
              <div className='carrouselDiv'>
              {data3.map((dataImage, index)=><Anchor to={"http://localhost:5173/city/"+dataImage._id}><Slide key={index} imageFile={dataImage.image} imageAlt={dataImage.alt} imageName={dataImage.name} imageCountry={dataImage.country}></Slide></Anchor>)}
            </div>
            }
            {carrousel == 4 && 
              <div className='carrouselDiv'>
              {data4.map((dataImage, index)=><Anchor to={"http://localhost:5173/city/"+dataImage._id}><Slide key={index} imageFile={dataImage.image} imageAlt={dataImage.alt} imageName={dataImage.name} imageCountry={dataImage.country}></Slide></Anchor>)}
            </div>
            }
          </div>:
          <div className='carrButtonLoading'>
            <h2>
              Loading
            </h2>
          </div>}
          
        </div>
        <button className='carrButton' onClick={()=>handlerNext()}>&gt;</button>
      </div>
    )
}
