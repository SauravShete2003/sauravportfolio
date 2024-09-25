import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter , RouterProvider } from 'react-router-dom';
import './index.css'
import Home from './views/Home/Home'
import Navbar from './components/Navbar/Navbar';
import AboutMe from './views/AboutMe/AboutMe';
import SkillSection from './views/SkillSection/SkillSection';
import Projects from './views/Projects/Projects';
import Contact from './views/Contact/Contact';

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
  },
  {
    path : '/skill',
    element : <SkillSection/>
  },
  {
    path : '/projects',
    element : <Projects/>
  },
  {
    path : '/contact',
    element : <Contact/>
  }
])

root.render(<RouterProvider router={router}/>)

