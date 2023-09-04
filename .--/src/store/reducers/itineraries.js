import { createReducer } from "@reduxjs/toolkit";
import itineraryActions from "../actions/itineraries";

const initialState = {
    itinerary : [
        {
            "name": "",
            "price": 0,
            "duration": 0,
            "likes": 0,
            "hashtags": [],
            "city": {}
        }
    ]
}

const itinerariesReducer = createReducer(initialState, (builder)=> {
    return builder
    .addCase(itineraryActions.filter_itineraries_by_city_id.fulfilled, (state, action) =>{
        const newState = {...state, itinerary: action.payload.itinerariesFound};
        return newState;
    })
})

export default itinerariesReducer;