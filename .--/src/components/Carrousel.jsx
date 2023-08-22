import React, { useEffect, useState } from 'react'
import Slide from './Slide'

export default function Carrousel() {

  let data1=[{
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
  }]
    let [carrousel, setCarrousel] = useState(1);

    let handlerBack = () => {
      if(carrousel !=1) {
        setCarrousel(carrousel - 1);
      } else {
        setCarrousel(3)
      }
    }
  
    let handlerNext = () => {
      if(carrousel != 3) {
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
            <h2 className='popularMyTineraries'>Popular MyTineraries</h2>
          <div className='containerFlex'>
            {carrousel == 1 && 
              <div className='carrouselDiv'>
                {data1.map(dataImage=><Slide key={dataImage.key} imageFile={dataImage.imageFile} imageAlt={dataImage.imageFile} imageName={dataImage.imageName} imageCountry={dataImage.imageCountry}></Slide>)}
              </div>
            }
            {carrousel == 2 && 
              <div className='carrouselDiv'>
              {data2.map(dataImage=><Slide key={dataImage.key} imageFile={dataImage.imageFile} imageAlt={dataImage.imageFile} imageName={dataImage.imageName} imageCountry={dataImage.imageCountry}></Slide>)}
            </div>
            }
            {carrousel == 3 && 
              <div className='carrouselDiv'>
              {data3.map(dataImage=><Slide key={dataImage.key} imageFile={dataImage.imageFile} imageAlt={dataImage.imageFile} imageName={dataImage.imageName} imageCountry={dataImage.imageCountry}></Slide>)}
            </div>
            }
          </div>
        </div>
        <button className='carrButton' onClick={()=>handlerNext()}>&gt;</button>
      </div>
    )
}
