import React from 'react'
import { IoMdTrendingUp } from "react-icons/io";
import { useGifphy } from '../contexts/GifProvider';


const gifFilters = [
    {
        title: "Gifs",
        value: "gifs",
        background: "bg-pink-600"
    },
    
    {
        title: "Stickers",
        value: "stickers",
        background: "bg-pink-600"
    },
    
    {
        title: "Text",
        value: "text",
        background: "bg-pink-600"
    }
]

const GifFilter = ({showFilter=true}) => {
    const {filter, setFilter} = useGifphy()
  return (
    <div className='flex flex-col md:flex-row items-center justify-between mt-3'>
        { showFilter && <div className='flex gap-3 items-center justify-center'>
            <IoMdTrendingUp size={30} className='text-blue-500' />
            <span>Trending</span>
        </div>}
        
        <div className='bg-gray-600 flex rounded-full min-w-l' >
            {gifFilters.map((gifFilter) => (
                <span key={gifFilter.value} 
                      className={`font-bold px-5 py-2 w-1/3 text-center rounded-full cursor-pointer ${filter === gifFilter.value ? gifFilter.background : ""}`}
                      onClick={() => setFilter(gifFilter.value)}>
                    {gifFilter.title}
                </span>
            ))}
        </div>
    </div>
  )
}

export default GifFilter