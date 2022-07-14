import axios from "axios";
import { CONFIG } from "./config";

// const token = localStorage.getItem("token")===null?'': localStorage.getItem("token");
const token = "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhdXRob3IiLCJvcmciOiJuYXNodGVjaCIsImV4cCI6MTY1Nzc5Mjg1NywiaWF0IjoxNjU3Nzc0ODU3fQ.22C43BRTkpXHeAD-0yHEQnsaYVkZabcLSlst3WlkoLwmqYIdH1loLOshyfMxOhzMfuB2Qf3TCrJL3u0QfSGGyg"

console.log("token : ",token)
const instance = axios.create(
    {
        baseURL:CONFIG.baseUrl,
        headers:{
            Authorization : "Bearer "+token
        }
           
    }
)

export default instance;