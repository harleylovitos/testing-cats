import { combineReducers } from '@reduxjs/toolkit'
import catsSlice from './catsSlice';
import breedsSlice from './breedsSlice';

const rootReducer = combineReducers({catsSlice,breedsSlice})
export type RootState = ReturnType<typeof rootReducer>

export default rootReducer