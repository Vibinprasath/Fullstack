import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Link, RouterProvider, createBrowserRouter } from 'react-router-dom'
import LoginForm from './components/loginpage'
import RegistrationForm from './components/registerpage'
import Navbar from './components/navbar'
import Homepage from './components/homepage'
import Contact from './components/contact'
import Poster from './components/posters'
import About from './components/about'
import Dashboard from './components/dashboard'
import 'rsuite/dist/rsuite-no-reset.min.css';

function App() {
  const [count, setCount] = useState(0)
  const route=createBrowserRouter([
    {
      path:'/',
      element:<LoginForm/>
    },
    {
      path:'/register',
      element:<RegistrationForm/>
    },
    {
      path:'/navbar',
      element:<Navbar/>
    },
    {
      path:'/homepage',
      element:<Homepage/>
    },
    {
      path:'/contact',
      element:<Contact/>
        },
        {
          path:'/poster',
          element:<Poster/>
            },
    {
              path:'/about',
              element:<About/>
      },
      {
        path:'/d',
        element:<Dashboard/>
}

  ])

  return (  
    <>
      <RouterProvider router={route}/>
    </>
  )
}

export default App
