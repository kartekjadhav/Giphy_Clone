import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { HiEllipsisVertical } from "react-icons/hi2";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { useGifphy } from '../contexts/GifProvider';

const Header = () => {
  const [categories, setCategories] = useState([])
  const [showCategories, setShowCategories] = useState(false)

  const {gf, gifs, setGifs, filter, setFilter, favourites, setFavourites} = useGifphy()

  async function fetchCategories(){
    const {data} = await gf.categories()
    setCategories(data)
}

  useEffect(() => {
    fetchCategories()
  }, [])

  return (
    <nav>
        <div className='relative flex items-center justify-between gap-3 mb-2'>
            <Link to="/" className='flex items-center gap-2'>
                <img src="/logo.svg" alt="Gipgy Logo" className='w-9'/>
                <h1 className='text-5xl font-bold cursor-pointer tracking-tight'>Giphy</h1>
            </Link>
            <div className='flex items-center gap-3'>
                {categories?.slice(0, 7)?.map((category) => (
                    <Link to={`/${category.name_encoded}`} className='px-4 py-2 text-lg font-semibold hover-gradient border-b-2 hidden lg:block'>
                        {category.name}
                    </Link>))
                }
                <button onClick={() => setShowCategories(!showCategories)}>
                    <HiEllipsisVertical size={35} className={`cursor-pointer hover-gradient ${showCategories ? "gradient":""} `}  />
                </button>
                {favourites.length > 0 && <div className='px-4 py-3 rounded-lg font-bold bg-gray-500 hover:bg-gray-400 cursor-pointer'>
                    <Link to={"/favourites"}>                    
                        Faourites
                    </Link>
                </div>}
                <button>
                    <HiOutlineMenuAlt3 size={30} className='text-sky-400 block lg:hidden cursor-pointer'/>
                </button>
                
                {   showCategories && 
                    <div className='absolute w-full gradient px-9 py-9 right-0 top-15 z-20'>
                        <h1 className='text-3xl font-bold mb-2'>Categories</h1>
                        <hr className='opacity-20 bg-gray-600' />
                        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 mt-3'>
                            {categories.map(category => (
                                <Link to={`/${category.name_encoded}`}
                                    className='text-xl font-bold px-3 py-2 hover:bg-white hover:text-black hover:rounded-lg'>
                                    {category.name}
                                </Link>
                            ))}
                        </div>
                    </div>
                }
                
            </div>
        </div>
    </nav>
  )
}

export default Header