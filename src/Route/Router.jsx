import React from 'react';
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import MainPage from '../Layout/MainPage';
import HomePage from '../Page/HomePage/HomePage';
import Login from '../Page/Login/Login';
import Statistics from '../Page/Statistics/Statistics'
// import ServiceDetails from '../Page/ServiceDetails/ServiceDetails'
import DashBoard from '../Page/DashBoard/DashBoard';
import ServiceDetails from '../Page/ServiceDetails';
import FourOfour from '../components/FourOfour';
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainPage></MainPage>,
      children: [
        {
          path: "/",
          element:<HomePage></HomePage>
        },
        
        {
          path: "login",
          element:<Login></Login>
        },
        {
          path: "service-details/:id",
          element:<ServiceDetails></ServiceDetails>
        },

        {
          path: "statistics",
          element: <Statistics></Statistics>
        },
        {
          path: "dashboard",
          element: <DashBoard></DashBoard>
        },
        {
          path: "*",
          element: <FourOfour title='Page not found'></FourOfour>
        }
        

      ]
    },
  ]);

export default router;