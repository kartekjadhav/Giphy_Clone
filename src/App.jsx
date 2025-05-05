import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Favourites from './pages/Favourites'
import Search from './pages/Search'
import GifPage from './pages/GifPage'
import Categories from './pages/Categories'
import Home from './pages/Home' 
import AppLayout from './layouts/AppLayout'

// Routes
// homepage
// favourites
// search
// single gif
// categories

const router = createBrowserRouter([
  {
    element: <AppLayout/>,
    children: [
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/favourites",
        element: <Favourites/>
      },
      {
        path: "/search/:query",
        element: <Search/>
      },
      {
        path: "/:type/:slug",
        element: <GifPage/>
      },
      {
        path: "/:category",
        element: <Categories/>
      }
    ]
  }
])

function App() {
  return <RouterProvider  router={router} />
}

export default App
