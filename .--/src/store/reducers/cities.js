import { createReducer } from "@reduxjs/toolkit";
import cityActions from "../actions/cities";

const initialState = {
    cities : [
        {
            "name": "",
            "country": "",
            "description": "",
            "image": "",
            "alt": "",
            "itineraries": []
        }
    ]
}

const citiesReducer = createReducer(initialState, (builder)=>{
    return builder
        .addCase(cityActions.get_cities.fulfilled, (state, action)=>{
            const newState = {...state, cities: action.payload.cities};
            return newState
        })
        .addCase(cityActions.filter_cities_by_name.fulfilled, (state, action)=>{
            const newState = {...state, cities: action.payload.citiesFound}
            return newState
        })
        .addCase(cityActions.filter_cities_by_id.fulfilled, (state, action)=>{
            const newState = {...state, cities: action.payload.city};
            return newState
        })
})

export default citiesReducer;