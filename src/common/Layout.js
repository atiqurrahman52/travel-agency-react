import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../shared/Footer';
import Loader from '../shared/Loader';
import NavBar from '../shared/Navbar';

const Layout = () => {
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchData = async () => {
          await new Promise((resolve) => setTimeout(resolve, 3000));
          
          setLoading(false);
        };
    
        fetchData();
      }, []);
    return (
        <div className={`${loading && 'overflow-hidden h-screen'}`}>
            {/* {loading ? 
            <Loader/>
            :
            <> */}

            {loading &&  <Loader/>}
            <NavBar/>
            <Outlet/>
            <Footer />
            {/* </>
            } */}
        </div>
    );
};

export default Layout;