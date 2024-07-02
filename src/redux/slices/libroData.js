import { createSlice } from '@reduxjs/toolkit';



const libroDataSlice = createSlice({
    
 name: 'libroData',
 //estado inicial del store
 initialState: {
    libroId: null,
    libroISBN: null,
    libroTitulo:null,
    libroAutores: null,
    libroEjemplares:null,
    libroPublicacion:null,    
    libroEditorial:null,  
 },
 reducers: {
    ///Las acciones
    setLibroStorage:(state, action)=>{                        
       //localStorage.setItem("token", action.payload.token);
        return{
            // recorre todo lo que tiene state y lo guarda y añada lo siguiente
             ...state,
             libroId: action.payload?.libroId,  
             libroISBN: action.payload?.libroISBN,
             libroTitulo:action.payload?.libroTitulo,
             libroAutores: action.payload?.libroAutores,
             libroEjemplares:action.payload?.libroEjemplares,
             libroPublicacion:action.payload?.libroPublicacion,
             libroEditorial:action.payload?.libroEditorial,           
        }
    },
    setLogoutLibroStorage:(state, action)=>{
        //localStorage.clear();
        return{
            // recorre todo lo que tiene state y lo guarda y añada lo siguiente
            ...state,
            //isAuth: false
        }

    }
 }
});

export const { setLibroStorage, setLogoutLibroStorage} = libroDataSlice.actions;

export default libroDataSlice.reducer;