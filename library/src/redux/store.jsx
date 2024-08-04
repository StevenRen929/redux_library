import { configureStore } from "@reduxjs/toolkit";
import bookReducer from './bookSlice';

const store = configureStore({
  reducer:{
    books:bookReducer,
   //library ... 
  }
})

export default store;
