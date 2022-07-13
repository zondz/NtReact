export const CONFIG={
    baseUrl:"http://localhost:8080",
    headers:{
        "Content-Type":"application/json",
    }
}
export const END_POINT={
    getAll:'/posts',
    get2Samples:'/posts?limit=2',
    getById:'/posts/',
    createNewPost:'/posts/'
}