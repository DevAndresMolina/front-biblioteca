import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBarComponent from '../../components/NavBar';
import Footer from '../../components/Footer';

const MainLayout = () => {

    return(
        <>
        {/* Headear */}
        <NavBarComponent/>

        {/* Body */}
        <Outlet/>
        
        
        
        {/* Footer */}
        <Footer/>
        </>
    );
}

export default MainLayout