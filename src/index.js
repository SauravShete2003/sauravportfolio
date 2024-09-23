import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter , RouterProvider } from 'react-router-dom';
import './index.css'
import Home from './views/Home/Home'
import Navbar from './components/Navbar/Navbar';
import AboutMe from './views/AboutMe/AboutMe';

const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter([
  {
    path : '/',
    element : <Home/>
  },
  {
    path : '/navbar',
    element : <Navbar/>
  },
  {
    path : "/about",
    element : <AboutMe/>
  }
])

root.render(<RouterProvider router={router}/>)

