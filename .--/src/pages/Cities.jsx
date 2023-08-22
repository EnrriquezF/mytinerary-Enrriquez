import React, { useEffect, useState, useRef } from 'react'
import CityCard from '../components/cityCard'
import { getAllCities, getCityByName } from '../services/eventsQueries.js'

const Cities = () => {
  const [cities, setCities] = useState([])
  const [allCities, setAllCities] = useState([])

  const input = useRef(null)

  useEffect(() =>{
    getAllCities()
      .then( (data) =>{
        setCities(data)
        setAllCities(data)
      })
      .catch((err) => console.log(err))
  }, []);

  const handleSubmit = (e) =>{
    e.preventDefault();
    if(input.current.value){
      const queryParams = input.current.value;
      getCityByName(queryParams)
      .then((answer) => {
        let citiesFound = []
        answer.forEach((city) => {
        if(city.name.toLowerCase().startsWith(queryParams.toLowerCase())){
          citiesFound.push(city)
        }
        
      })
      return setCities(citiesFound)
    })
      .catch((err) => console.log(err))
    } else {
      setCities(allCities)
    }
  }


  return (<>
    <div className='citiesContainer'>
      <div>
      <h1>Cities</h1>
      </div>
      <form className='searcher' onSubmit={handleSubmit}>
        <input type="text" ref={input}/>
        <button> 🔎 </button>
      </form>
    </div>
    <div className='Prueba01'>
    {cities.length > 0?
    <div className='citiesDivContainer'>
      {cities.map((cities) =>(
        <CityCard name={cities.name} country={cities.country} description={cities.description} image={cities.image} alt={cities.alt} link={cities._id} key={cities._id}/>
      ))
      }
      </div>:
      <div className='citiesEmptyDivContainer'>
        <h2>No results found.</h2>
      </div>}
      </div>
      </>
    )
}

export default Cities