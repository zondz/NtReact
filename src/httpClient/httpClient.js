import axios from 'axios'
import {CONFIG} from './config.js'
import instance from './AxiosInstance.js';

 const get = (endPoint,options={})=>{
    return axios.get(CONFIG.baseUrl+endPoint);
}


const post = (endPoint,data)=>{
    // return axios.post(CONFIG.baseUrl+endPoint,data);
   return instance.post(endPoint,data)
}

const  httpClient = {
    get,
    post
}

export default httpClient;

