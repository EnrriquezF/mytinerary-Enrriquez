import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const get_cities = createAsyncThunk('get_cities', async ()=>{
    try{
        const cities = await axios.get("http://localhost:3000/api/cities")
                        .then( (cities) =>{
                            return cities.data
                        })
        return {
            cities: cities
        }
    }catch(e){
        console.log(e.message);
    }
});

const filter_cities_by_name = createAsyncThunk('filter_cities_by_name', async(query)=>{
    try{
        const citiesFound = await axios.get("http://localhost:3000/api/cities/?name="+ query)
            .then((citiesFound)=>{
                return citiesFound.data
            })
        return {
            citiesFound : citiesFound
        }
    }catch(e){
        console.log(e.message);
    }
})

const filter_cities_by_id = createAsyncThunk('filter_cities_by_id', async (id)=>{
    try{
        const city = await axios.get("http://localhost:3000/api/city/"+id)
                    .then((cities) =>{
                        console.log(cities.data);
                        return cities.data
                    })
                    
        return {
            city: city
        }
    }catch(e){
        console.log(e.message);
    }
});

const cityActions = {get_cities, filter_cities_by_id, filter_cities_by_name};

export default cityActions;