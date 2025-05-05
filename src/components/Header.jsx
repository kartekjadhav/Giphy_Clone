import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { HiEllipsisVertical } from "react-icons/hi2";

const Header = () => {
  const [categories, setCategories] = useState([])
  const [showCategories, setShowCategories] = useState(false)

  return (
    <nav>
        <div className='relative flex items-center justify-between gap-3 mb-2'>
            <Link to="/" className='flex items-center gap-2'>
                <img src="/logo.svg" alt="Gipgy Logo" className='w-9'/>
                <h1 className='text-5xl font-bold cursor-pointer tracking-tight'>Giphy</h1>
            </Link>
            <div className='flex items-center gap-3'>
                <Link to="#" className='px-4 py-2 text-lg hover-gradient border-b-2 hidden lg:block'>
                    Reactions
                </Link>
                <button onClick={() => setShowCategories(!showCategories)}>
                    <HiEllipsisVertical size={35} className={`py-0.5 cursor-pointer hover-gradient ${showCategories ? "gradient":""} `}  />
                </button>
                <div className='px-4 py-3 rounded-lg font-bold bg-gray-500 hover:bg-gray-400 cursor-pointer'>
                    Faourites
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Header