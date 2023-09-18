import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import Swal from "sweetalert2";
import "toastify-js/src/toastify.css"

const register = createAsyncThunk('register', async (user)=>{
    try{
        const data = await axios.post("http://localhost:3000/api/user/register", {
            email: user.email,
            password: user.password,
            name: user.name,
            lastName: user.lastName,
            photoURL: user.photoURL,
            country: user.country
        })
        .then((response)=>{
            return response.data.message
        })
        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener('mouseenter', Swal.stopTimer)
              toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
          })
          
          Toast.fire({
            icon: 'success',
            title: 'Signed up successfully'
          })
        return {data: data}
    }catch(e){
        //console.log(e.message);
        let errorMessages = e.response.data.message
        Swal.fire({
            icon: 'error',
            title: "Oops... You couldnt sign up correctly!",
            text: errorMessages
        })
    }
})

const login_user = createAsyncThunk('login_user', async(user)=>{
    try{
        const login = await axios.post("http://localhost:3000/api/user/login", {email: user.email, password: user.password})
        .then( (response)=> {
            localStorage.setItem("verified", true)
            localStorage.setItem("token", response.data.token)
            localStorage.setItem("response", JSON.stringify(response.data.message))
            const Toast = Swal.mixin({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                didOpen: (toast) => {
                  toast.addEventListener('mouseenter', Swal.stopTimer)
                  toast.addEventListener('mouseleave', Swal.resumeTimer)
                }
              })
              
              Toast.fire({
                icon: 'success',
                title: 'Signed in successfully'
              })
            return {user: response.data.user, token: response.data.token}
        })
        return{ login : login }
    }catch(e){
        let errorMessages = e.response.data.message
        Swal.fire({
            icon: 'error',
            title: "Oops... You couldnt sign in correctly!",
            text: errorMessages
        })
    }
})

const authenticate = createAsyncThunk('authenticate', async ()=>{
    try{
        let token = localStorage.getItem("token")
        
        let user = await axios.post('http://localhost:3000/api/user/authenticated', null, {
            headers: {
                'Authorization': 'Bearer ' + token
            }
        })
        .then((response)=>{
          localStorage.setItem("verified", true)
            console.log("Authenticated succesfully");
            return response.data.user
        })
        
        return { user: user}
    }catch(error) {
        //console.log(error.message);
        localStorage.removeItem('verified')
        localStorage.removeItem('token')
        localStorage.removeItem('response')
    }
})

const sign_out = createAsyncThunk('sign_out', async()=>{
    try{

        let token = localStorage.getItem('token')
        await axios.post('http://localhost:3000/api/user/logout', null, {
          headers: {
              'Authorization': 'Bearer ' + token
          }
      })
          Swal.fire({
            title: 'Are you sure?',
            text: "You can sign in anytime you want, anyway!",
            icon: 'warning',
            confirmButtonColor: '#3085d6',
            confirmButtonText: 'Yes!',
            showCancelButton: true,
            cancelButtonText:'Stay here',
          }).then((result) => {
            if (result.isConfirmed) {
            localStorage.removeItem("token")
            localStorage.removeItem('response')
            localStorage.removeItem('verified')
              Swal.fire(
                'Logged out!',
                'Hope you come back'
              )
            } else {
                Swal.fire({
                    icon: 'success',
                    title: 'Oki :)))'
                  })
            }
            ;
            
          })
    }catch(error) {
        let errorMessages = error.response.data
          localStorage.removeItem("token")
            localStorage.removeItem('response')
            localStorage.removeItem('verified')
    }
})

const userActions = { register, login_user, authenticate, sign_out };

export default userActions;