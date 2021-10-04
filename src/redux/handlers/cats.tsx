import {call,put} from "redux-saga/effects"
import {requestGetCats,requestGetCat} from "../requests/cats"
import {ICat,setCats,setCat,ICatDetails,setError} from '../catsSlice'

interface ICatsResult{
  data: ICat[]; 
}


export function* handleGetCats(action:any){      
    const  {breedId,page} = action.payload;
    try {
        const response:ICatsResult = yield call(requestGetCats,{breedId:breedId,page:page});
        const {data} = response;                
        yield put(setCats(data));
    }catch(error){              
      yield put(setError(error));        
    }
}

interface ICatResult{
  data: ICatDetails[]; 
}

export function* handleGetCat(action:any){      
  const  {id} = action.payload;
  try {
      const response:ICatResult = yield call(requestGetCat,{id:id});
      
      const {data} = response;                
      yield put(setCat(data));
  }catch(error:any){       
           
    yield put(setError(error));        
  }
}
