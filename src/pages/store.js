import { configureStore, createSlice } from "@reduxjs/toolkit";

const user = createSlice({
  name: 'user',
  initialState: {name: '향수매니아302'},
  reducers: {
    changeName(state){
      state.name = state.name;
    }
  }
});

export const { changeName } = user.actions;


const favorite = createSlice({
  name: 'favorite',
  initialState: [],
  reducers: {
    addFavorite(state, action){
      const exist = state.find((item)=> item.id === action.payload.id 
      );
      if(!exist){
        state.push(action.payload);
      }
    },
    removeFavorite(state, action){
      return state.filter((item)=>item.id !==action.payload);
    }
  }
});

export const{
  addFavorite,
  removeFavorite
} = favorite.actions;



export default configureStore({
  reducer:{
    user: user.reducer,
    favorite: favorite.reducer
  }
});