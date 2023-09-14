import { createReducer } from "@reduxjs/toolkit";
import userActions from "../actions/users";

const initialState = {
    user: {
        email: "",
        id: "",
        name: "",
        photoURL: "",
        country: ""
    }
}

const userReducer = createReducer(initialState, (builder) => {
    return builder
        .addCase(userActions.register.fulfilled, (state, action) =>{
            return initialState
        })
        .addCase(userActions.login_user.fulfilled, (state, action) =>{
            const newState = {...state, user: action.payload.login}
            return newState
        })
        .addCase(userActions.authenticate.fulfilled, (state, action) =>{
            return {user: action.payload.user}
        })
        .addCase(userActions.sign_out.fulfilled, (state, action)=>{
            return initialState
        })
})

export default userReducer;