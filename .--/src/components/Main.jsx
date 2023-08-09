import React, { useEffect, useState } from 'react'
import Article from './Article'
import image1 from "/tourist-destinations/01.png"
import image2 from "/tourist-destinations/02.png"
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

export default function () {
  let data=[
    {
      title: "Find your perfect trip, designed by insiders who know and love their cities!",
      paragraph: "Our app will help you find the perfect path for your next trip. With an easy-to-use interface and a host of itinerary options, planning your next trip has never been easier.",
      link: "#",
      key: "data"
    }
  ]

  let [image, setImage] = useState(1);

  
    let mainImage = () => {
      if(image != 12) {
        setImage(image+1);
      } else {
        setImage(1)
      }
    }
  
    useEffect(()=>{
      setInterval(()=>{mainImage()}, 3000)
    },[image])
  return (
      <main className='containerMain'>
        <div className='textContainer'>
          {data.map(each=> <Article key={each.key}title={each.title} paragraph={each.paragraph} link={each.link}></Article>)}
        </div>
        <div>
         {image === 1 && <img src={image1} alt="" className='homeImage' />}
         {image === 2 && <img src={image2} alt="" className='homeImage' />}
         {image === 3 && <img src={image3} alt="" className='homeImage' />}
         {image === 4 && <img src={image4} alt="" className='homeImage' />}
         {image === 5 && <img src={image5} alt="" className='homeImage' />}
         {image === 6 && <img src={image6} alt="" className='homeImage' />}
         {image === 7 && <img src={image7} alt="" className='homeImage' />}
         {image === 8 && <img src={image8} alt="" className='homeImage' />}
         {image === 9 && <img src={image9} alt="" className='homeImage' />}
         {image === 10 && <img src={image10} alt="" className='homeImage' />}
         {image === 11 && <img src={image11} alt="" className='homeImage' />}
         {image === 12 && <img src={image12} alt="" className='homeImage' />}
         </div> 
      </main>
  )
}
