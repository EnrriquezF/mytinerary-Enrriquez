import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const filter_itineraries_by_city_id = createAsyncThunk('filter_itineraries_by_city_id', async(query)=>{
    try{
        const itinerariesFound = await axios.get("http://localhost:3000/api/itinerary?id="+ query.id)
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