import httpClient from "../httpClient/httpClient" 
import { END_POINT } from "../httpClient/config"
export const getListPostService=()=>{
    return httpClient.get(END_POINT.getAll)
}

export const get2Samples=()=>{
    return httpClient.get(END_POINT.get2Samples)

}

export const getPostDetail=(id)=>{

    return httpClient.get(`${END_POINT.getById}${id}`)

    
}
