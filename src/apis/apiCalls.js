import axios from "axios";
const API_URL = process.env.REACT_APP_SWAPI_URL

export const getFilmCharsFromBackEnd=()=>
{
    return  axios.get(API_URL+'/people')
}
 

export const updateFilmChar=(item)=>
{
    return  axios.put(API_URL+'/people')
}

export const getFilmDetails=()=>
{
    return axios.get(API_URL+'/films')
}
 