import { createSlice } from "@reduxjs/toolkit";

export interface ICat{
    url: string;    
    id: string;
}

export interface ICatDetails{
  breed: string;    
  url: string; 
  breeds: [];
  id: string;
}

export interface ICats{
    cats: ICat[]
    cat: ICatDetails
}

const initialState = {cats: [],cat: {breeds:[],breed:'',url:'',id:''}} as ICats

const catsSlice = createSlice({
    name: 'cats',
    initialState,
    reducers: {
      setCats: (state,action) => {state.cats = action.payload},      
      setCat: (state,action) => {state.cat = action.payload},      
      getCats: (state,action) => state,
      getCat: (state,action) => state,
    },
  })
  
export const { setCats,getCats,getCat,setCat } = catsSlice.actions
export default catsSlice.reducer