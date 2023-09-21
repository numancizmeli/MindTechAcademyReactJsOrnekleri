import axios from "axios";

export const getFilmCharsFromBackEnd=()=>
{
    return  axios.get('https://swapi.dev/api/people')
}
 

export const updateFilmChar=(item)=>
{
    return  axios.put('https://swapi.dev/api/people')
}

export const getFilmDetails=()=>
{
    return axios.get('https://swapi.dev/api/films')
}
 