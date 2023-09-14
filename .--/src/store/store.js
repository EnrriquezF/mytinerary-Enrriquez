import { configureStore } from "@reduxjs/toolkit";
import citiesReducer from "./reducers/cities";
import itinerariesReducer from "./reducers/itineraries";
import userReducer from "./reducers/users";

export const store = configureStore({
    reducer: {
        citiesReducer: citiesReducer,
        itinerariesReducer: itinerariesReducer,
        userReducer: userReducer
    }
})