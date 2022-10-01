import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../shared/Footer';
import NavBar from '../shared/Navbar';

const Layout = () => {
    return (
        <>
            <NavBar/>
            <Outlet/>
            <Footer />
        </>
    );
};

export default Layout;