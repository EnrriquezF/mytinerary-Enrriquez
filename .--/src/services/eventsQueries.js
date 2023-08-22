import axios from "axios";

const cities = axios.create({
    baseURL: "http://localhost:3000"
})

export const getAllCities = async () =>{
    try{
        const {data} = await cities("/api/cities/")
        return data
    }catch(error){
        return []
    }
}

export const getCityByName = async (queryParams) =>{
    try{
        const {data} = await cities("/api/cities?name="+queryParams)
        return data
    }catch(error){
        return []
    }
}

export const getCity = async (id)=>{
    try{
        const {data} = await cities("/api/city/"+id)
        return data
    }catch(err){
        return []
    }
}