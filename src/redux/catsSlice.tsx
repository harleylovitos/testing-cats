import { createSlice } from "@reduxjs/toolkit";
import _ from "lodash"

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
    loadedAll: boolean;
}

const initialState = {cats: [],cat: {breeds:[],breed:'',url:'',id:''},loadedAll:false} as ICats

const catsSlice = createSlice({
    name: 'cats',
    initialState,
    reducers: {
      setCats: (state,action) => { 
        const union = _.unionWith(state.cats,action.payload,_.isEqual);         
        if(_.isEqual(state.cats.sort(), union.sort()) )
          state.loadedAll = true

        state.cats = union; 
      },      
      setCat: (state,action) => {state.cat = action.payload},      
      getCats: (state,action) => state,
      getCat: (state,action) => state,
      selectedNewBreed:(state) => {
        state.loadedAll = false
        state.cats = []
      },
    },
  })
  
export const { setCats,getCats,getCat,setCat,selectedNewBreed } = catsSlice.actions
export default catsSlice.reducer