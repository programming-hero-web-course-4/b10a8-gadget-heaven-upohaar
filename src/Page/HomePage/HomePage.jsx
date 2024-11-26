import React from 'react';
import HomeBanner from '../../components/HomeBanner';
import Services from './Services';
import { Helmet } from 'react-helmet-async';
const HomePage = () => {
    return (
        <div>
            <Helmet>
                <title>Gadget Heaven | Home</title>
               
            </Helmet>
            <Services></Services>
        </div>
    );
};

export default HomePage;