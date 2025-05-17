import { useState } from 'react'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AppLayout from './Layout/appLayout'
import Home from './pages/Home'
import Customize from './pages/Customize'
import NotFound from './pages/NotFound'

function App() {
  const router = createBrowserRouter([{
    path: '/',
    element: <AppLayout />, // layout route
    children: [
      {
        path:'/',
        element:<Home/>
      },
      {
        path:'/About',
        element:<Home/>
      },
      {
        path:'/customize',
        element:<Customize/>
      },
      {
        path:'/*',
        element:<NotFound/>
      }
    ],
  }])
  return (
    <RouterProvider router={router}/>
  )
}

export default App
