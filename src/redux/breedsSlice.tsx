import { createSlice } from "@reduxjs/toolkit";

export interface IBreed{
    name: string;
    id: string;
}

export interface IBreeds{
  breeds: IBreed[]
  breed: string;
}

const initialState = {breeds: [],breed: ""} as IBreeds

const breedsSlice = createSlice({
    name: 'breeds',
    initialState,
    reducers: {
      setBreeds: (state,action) => {state.breeds = action.payload},      
      getBreeds: (state) => state,  
      setBreed: (state,action) => {state.breed = action.payload.id},      
    },
  })
  
export const { setBreeds,getBreeds,setBreed } = breedsSlice.actions
export default breedsSlice.reducer