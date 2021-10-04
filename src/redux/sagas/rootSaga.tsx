import { takeLatest } from 'redux-saga/effects'
import { getBreeds } from '../breedsSlice';
import { getCats,getCat } from '../catsSlice';
import {handleGetBreeds} from '../handlers/breeds'
import {handleGetCats,handleGetCat} from '../handlers/cats'

export function* rootSaga(){
    yield takeLatest(getBreeds.type,handleGetBreeds);
    yield takeLatest(getCats.type,handleGetCats);
    yield takeLatest(getCat.type,handleGetCat);
}
