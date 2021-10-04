import axios, { AxiosResponse } from "axios"

interface IParams{
    breedId:string
    page:number
}


export const requestGetCats = ({breedId,page}:IParams): Promise<AxiosResponse<never>> => {
    return axios.request({
        method: "GET",
        url: "https://api.thecatapi.com/v1/images/search?page="+page+"&limit=10&breed_id="+breedId
    })
}

interface IParamsGetCat{
    id:string
}

export const requestGetCat = ({id}:IParamsGetCat): Promise<AxiosResponse<never>> => {
    return axios.request({
        method: "GET",
        url: "https://api.thecatapi.com/v1/images/"+id
    })
}

