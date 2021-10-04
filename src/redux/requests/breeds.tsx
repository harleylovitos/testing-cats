import axios, { AxiosResponse } from "axios"


export function requestGetBreeds():Promise<AxiosResponse<never>>{
    return axios.request({
        method: "GET",
        url: "https://api.thecatapi.com/v1/breeds"
    })
}