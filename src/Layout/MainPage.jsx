import React from 'react';
import Header from '../Shared/Header/Header'
import Footer from '../Shared/Footer/Footer'
import { Outlet, useLocation } from 'react-router-dom';
import HomeHeader from '../Shared/Header/HomeHeader';
const MainPage = () => {
    const location = useLocation()
    
    return (
        <div>
            {location.pathname=='/'? <HomeHeader></HomeHeader> : <Header></Header> }
            <Outlet></Outlet>
            <Footer></Footer>
        
        </div>
    );
};

export default MainPage;