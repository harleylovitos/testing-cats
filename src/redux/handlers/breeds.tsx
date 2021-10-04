import {call,put} from "redux-saga/effects"
import {requestGetBreeds} from "../requests/breeds"
import {setBreeds} from "../breedsSlice"

interface IBreed{
    id: string;
    name: string;
}

interface IBreeds{
    data: IBreed[]; 
}

export function* handleGetBreeds(){
    try {
        const response:IBreeds = yield call(requestGetBreeds);
        const {data} = response;                
        yield put(setBreeds(data));
    }catch(error){
        console.log(error);
        
    }
}