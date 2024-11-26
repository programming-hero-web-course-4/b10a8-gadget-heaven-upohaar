import React from 'react';
import DashBoardBanner from '../../components/DashBoardBanner';
import { Helmet } from 'react-helmet-async';

const DashBoard = () => {
    return (
        <div>
            <Helmet>
                <title>Gadget Heaven | Dash Board</title>
               
            </Helmet>
            <DashBoardBanner></DashBoardBanner>
        </div>
    );
};

export default DashBoard;