import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const get_cities = createAsyncThunk('get_cities', async ()=>{
    try{
        let token = localStorage.getItem('token')
        const headers = {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          };
        const cities = await axios.get("https://mytinerary-back-enrriquezflorencia.onrender.com/api/cities", { headers })
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
        let token = localStorage.getItem('token')
        const headers = {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          };
        const citiesFound = await axios.get("https://mytinerary-back-enrriquezflorencia.onrender.com/api/cities/?name="+ query, {headers})
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
        let token = localStorage.getItem('token')
        const headers = {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          };
        const city = await axios.get("https://mytinerary-back-enrriquezflorencia.onrender.com/api/city/"+id, {headers})
                    .then((cities) =>{
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