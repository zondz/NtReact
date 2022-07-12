import axios from 'axios'
import {CONFIG} from './config.js'

 const get = (endPoint,options={})=>{
    return axios.get(CONFIG.baseUrl+endPoint);
}

const  httpClient = {
    get
}

export default httpClient;

