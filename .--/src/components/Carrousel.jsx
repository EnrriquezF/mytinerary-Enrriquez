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
  let data1=[citiesInStore[0], citiesInStore[1], citiesInStore[2], citiesInStore[3]]
  let data2=[citiesInStore[4], citiesInStore[5], citiesInStore[6], citiesInStore[7]]
  let data3=[citiesInStore[8], citiesInStore[9], citiesInStore[10], citiesInStore[11]]
  let data4=[citiesInStore[12], citiesInStore[13], citiesInStore[14]]
  
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
                {data1.map((dataImage,index)=><Anchor to={"/city/"+dataImage._id}><Slide key={index} imageFile={dataImage.image} imageAlt={dataImage.alt} imageName={dataImage.name} imageCountry={dataImage.country}></Slide></Anchor>)}
              </div>
            }
            {carrousel == 2 && 
              <div className='carrouselDiv'>
              {data2.map((dataImage, index)=><Anchor to={"/city/"+dataImage._id}><Slide key={index} imageFile={dataImage.image} imageAlt={dataImage.alt} imageName={dataImage.name} imageCountry={dataImage.country}></Slide></Anchor>)}
            </div>
            }
            {carrousel == 3 && 
              <div className='carrouselDiv'>
              {data3.map((dataImage, index)=><Anchor to={"/city/"+dataImage._id}><Slide key={index} imageFile={dataImage.image} imageAlt={dataImage.alt} imageName={dataImage.name} imageCountry={dataImage.country}></Slide></Anchor>)}
            </div>
            }
            {carrousel == 4 && 
              <div className='carrouselDiv'>
              {data4.map((dataImage, index)=><Anchor to={"/city/"+dataImage._id}><Slide key={index} imageFile={dataImage.image} imageAlt={dataImage.alt} imageName={dataImage.name} imageCountry={dataImage.country}></Slide></Anchor>)}
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
