import React, { useEffect, useRef } from 'react'
import CityCard from '../components/CityCard'
import { useDispatch, useSelector } from 'react-redux'
import cityActions from '../store/actions/cities'
import { Navigate, useNavigate } from 'react-router-dom'
import userActions from '../store/actions/users'




const Cities = () => {
  let verification = localStorage.getItem('verified')
  let token = localStorage.getItem("token")
  let citiesInStore = useSelector(store => store.citiesReducer.cities)

  let dispatch = useDispatch()
  const input = useRef(null)
  
  
  useEffect(() =>{
    dispatch(cityActions.get_cities())
  }, []);

  const handleSubmit = async (e) =>{
    e.preventDefault();
    if(input.current.value){
      const queryParams = input.current.value;
      dispatch(cityActions.filter_cities_by_name(queryParams))
    } else {
      dispatch(cityActions.get_cities())
    }
  }

  return (<div className='cityPageMain'>
    <div className='citiesContainer'>
      <div className='h1Cities'>
      <h1>Cities</h1>
      </div>
      <form className='searcher' onSubmit={handleSubmit}>
        <input type="text" ref={input}/>
        <button className='searchBar'> 🔎 </button>
      </form>
    </div>
    <div className='citiesContainerr'>
    {citiesInStore.length > 1?
    <div className='citiesDivContainer'>
      {citiesInStore.map((cities, index) =>(
        <CityCard name={cities.name} country={cities.country} description={cities.description} image={cities.image} alt={cities.alt} link={cities._id} key={index}/>
      ))
      }
      </div>:
      
      citiesInStore.length == 1?
      <div className='citiesEmptyDivContainer'>
        {citiesInStore[0].name == ""? <div className='citiesLoading'><h2>Loading</h2></div>:
        <div className='citiesDivContainer'>
        {citiesInStore.map((cities, index) =>(
          <CityCard name={cities.name} country={cities.country} description={cities.description} image={cities.image} alt={cities.alt} link={cities._id} key={index}/>
        ))
        }
        </div>
        }
      </div>:
      
      <div className='citiesLoading'>
        <h2>No results found.</h2>
      </div>}
      </div>
      </div>
    )
}

export default Cities
