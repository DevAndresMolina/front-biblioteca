import { createSlice } from '@reduxjs/toolkit';



const usuarioDataSlice = createSlice({
    
 name: 'usuarioData',
 //estado inicial del store
 initialState: {
    usuarioCedula: null,
    usuarioNombre: null,
    usuarioApellido: null,
    usuarioCelular: null,
    usuarioDireccion: null
 },
 reducers: {
    ///Las acciones
    setUsuarioStorage:(state, action)=>{                        
       //localStorage.setItem("token", action.payload.token);
        return{
            // recorre todo lo que tiene state y lo guarda y añada lo siguiente
             ...state,
             usuarioCedula: action.payload?.usuarioCedula,  
             usuarioNombre: action.payload?. usuarioNombre,
             usuarioApellido:action.payload?.usuarioApellido,
             usuarioCelular: action.payload?.usuarioCelular,
             usuarioDireccion:action.payload?.usuarioDireccion                       
        }
    },
    setLogoutUsuarioStorage:(state, action)=>{
        //localStorage.clear();
        return{
            // recorre todo lo que tiene state y lo guarda y añada lo siguiente
            ...state,
            //isAuth: false
        }

    }
 }
});

export const { setUsuarioStorage, setLogoutUsuarioStorage} = usuarioDataSlice.actions;

export default usuarioDataSlice.reducer;