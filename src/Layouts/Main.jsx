import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../Sharedcomponents/Footer/Footer';
import Navbar from '../Sharedcomponents/Navbaar/Navbar';

const Main = () => {
    const location = useLocation();
    console.log(location.pathname);
    const exactLocation = location.pathname.includes('/login')

    return (
        <div>
            {exactLocation || <Navbar></Navbar>}
            <Outlet></Outlet>
            {exactLocation || <Footer></Footer>}
        </div>
    );
};

export default Main;