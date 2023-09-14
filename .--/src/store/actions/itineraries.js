import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const filter_itineraries_by_city_id = createAsyncThunk('filter_itineraries_by_city_id', async(query)=>{
    try{
        let token = localStorage.getItem('token')
        const headers = {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          };
        const itinerariesFound = await axios.get("http://localhost:3000/api/itinerary?id="+ query.id, {headers})
            .then((itinerariesFound)=>{
                return itinerariesFound.data
            })
        return {
            itinerariesFound : itinerariesFound
        }
    }catch(e){
        console.log(e.message);
    }
})

const itineraryActions = { filter_itineraries_by_city_id };

export default itineraryActions;