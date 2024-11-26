import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Helmet, HelmetProvider } from 'react-helmet-async';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import router from './Route/Router.jsx';
import AuthProvider from './components/AuthProvider.jsx';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <HelmetProvider><RouterProvider router={router} /></HelmetProvider>
      

    </AuthProvider>

  </StrictMode>,
)
