import axios from "axios";
import { CONFIG } from "./config";

// const token = localStorage.getItem("token")===null?'': localStorage.getItem("token");
const token = "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhdXRob3IiLCJvcmciOiJuYXNodGVjaCIsImV4cCI6MTY1Nzc1MTExMiwiaWF0IjoxNjU3NzMzMTEyfQ.KUin-83JO8yT7aiz6ELn1Ll81oa7jzi61ZnLLW7u1SU1Pt9MA0CrTHz_WwfB3HYOlvlhwdmhDDDdTYIvlaN8Cg"

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