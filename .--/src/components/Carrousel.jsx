import React, { useEffect, useState } from 'react'
import image1 from "/tourist-destinations/01.png"
import imagen2 from "/tourist-destinations/02.png"
import image3 from "/tourist-destinations/03.png"
import image4 from "/tourist-destinations/04.png"
import image5 from "/tourist-destinations/05.png"
import image6 from "/tourist-destinations/06.png"
import image7 from "/tourist-destinations/07.png"
import image8 from "/tourist-destinations/08.png"
import image9 from "/tourist-destinations/09.png"
import image10 from "/tourist-destinations/10.png"
import image11 from "/tourist-destinations/11.png"
import image12 from "/tourist-destinations/12.png"

export default function Carrousel() {
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
                <div className='carrImageCont'>
                  <img src={image1} alt="" className='carrouselImage'/>
                  <p>New York City, USA</p>
                </div>
                <div className='carrImageCont'>
                  <img src={imagen2} alt="" className='carrouselImage'/>
                  <p>Paris, France</p>
                </div>
                <div className='carrImageCont'>
                  <img src={image3} alt="" className='carrouselImage'/>
                  <p>Agra, India</p>
                </div>
                <div className='carrImageCont'>
                  <img src={image4} alt="" className='carrouselImage'/>
                  <p>Moscow, Russia</p>
                </div>
                
                
                
                
              </div>
            }
            {carrousel == 2 && 
              <div className='carrouselDiv'>
                <div className='carrImageCont'>
                  <img src={image5} alt="" className='carrouselImage'/>
                  <p>Krabi, Thailand </p>
                </div>
                <div className='carrImageCont'>
                  <img src={image6} alt="" className='carrouselImage'/>
                  <p>Rome, Italy</p>
                </div>
                <div className='carrImageCont'>
                  <img src={image7} alt="" className='carrouselImage'/>
                  <p>Ho Chi Mihn, Vietnam</p>
                </div>
                <div className='carrImageCont'>
                  <img src={image8} alt="" className='carrouselImage'/>
                  <p>Venice, Italy</p>
                </div>
              
              </div>
            }
            {carrousel == 3 && 
              <div className='carrouselDiv'>
                <div className='carrImageCont'>
                  <img src={image9} alt="" className='carrouselImage'/>
                  <p>London, UK</p>
                </div>
                <div className='carrImageCont'>
                  <img src={image10} alt="" className='carrouselImage'/>
                  <p>Machu Picchu, Peru</p>
                </div>
                <div className='carrImageCont'>
                  <img src={image11} alt="" className='carrouselImage'/>
                  <p>Buenos Aires, Argentina</p>
                </div>
                <div className='carrImageCont'>
                  <img src={image12} alt="" className='carrouselImage'/>
                  <p>Sydney, Australia</p>
                </div>
              </div>
            }
          </div>
        </div>
        
        
        <button className='carrButton' onClick={()=>handlerNext()}>&gt;</button>
      </div>
    )
}
