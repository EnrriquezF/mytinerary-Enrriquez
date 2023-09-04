import { configureStore } from "@reduxjs/toolkit";
import citiesReducer from "./reducers/cities";
import itinerariesReducer from "./reducers/itineraries";

export const store = configureStore({
    reducer: {
        citiesReducer: citiesReducer,
        itinerariesReducer: itinerariesReducer
    }
})