import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../shared/Footer';
import Loader from '../shared/Loader';
import NavBar from '../shared/Navbar';

const Layout = () => {
    // const [loading, SetLoading] = useState(true)
    return (
        <>
            {/* {loading ? 
            <Loader/>
            :
            <> */}
            <NavBar/>
            <Outlet/>
            <Footer />
            {/* </>
            } */}
        </>
    );
};

export default Layout;