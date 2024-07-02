import { configureStore } from "@reduxjs/toolkit";
import libroDataSlice from './slices/libroData';
import loadingSlice from "./slices/loadingSlice";



export default configureStore({
    reducer: {
        libroStore: libroDataSlice,        
        loading: loadingSlice, 
    },
    devTools: process.env.NODE_ENV !== 'production'
})