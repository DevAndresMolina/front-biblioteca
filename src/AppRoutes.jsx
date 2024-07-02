import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import HomeScreen from './screens/home';
import MainLayout from './layouts/main';
import LibrosScreen from './screens/libros';
import UsuariosSecreen from './screens/usuarios';
import './App.scss';
import EditarLibroScreen from './screens/editarLibro';
import RegistrarLibroScreen from './screens/registrarLibro';
import RegistrarUsuarioScreen from './screens/registrarUsuario';
import BuscarLibroScreen from './screens/buscarLibro';


//import NewLibroScreen from './screens/libros/new';



const router = createBrowserRouter([
    {
        path: '/dasboard',
        element: <HomeScreen/>
    },
    {
        path: '/',
        element: <MainLayout/>, 
                       
        children: [
            {
                path: 'dashboard',
                element: <HomeScreen/>
            },
            {
                path: 'libros',                
                element: <LibrosScreen/>                
            },     
            {
                path: 'usuarios/',
                element: <UsuariosSecreen/>
            },
            {
                path: 'registrarusuarios/',
                element: <RegistrarUsuarioScreen/>
            },
            {
                path: 'editarLibro/',
                element: <EditarLibroScreen/>
            }
            ,
            {
                path: 'buscarLibro/',
                element: <BuscarLibroScreen/>
            }
            ,
            
            {
                path: 'registrarLibro/',
                element: <RegistrarLibroScreen/>
            }

            
        ]
    }
]);

export default router;