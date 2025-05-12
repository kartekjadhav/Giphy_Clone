import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'


const AppLayout = () => {
  return (
    <div className='bg-gray-950 min-h-screen text-white'>
      <div className='container px-6 py-5 mx-auto'>
        <Header/>
        <main>
          <Outlet/>
        </main>
      </div>
    </div>
  )
}

export default AppLayout