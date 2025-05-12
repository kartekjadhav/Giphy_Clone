import React from 'react'
import { IoMdTrendingUp } from "react-icons/io";
import { useGifphy } from '../contexts/GifProvider';


const gifFilter = [
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
    <div className='flex items-center justify-between mt-3'>
        { showFilter && <div className='flex gap-3 items-center justify-center'>
            <IoMdTrendingUp size={30} className='text-blue-500' />
            <span>Trending</span>
        </div>}
        
        <div className='bg-gray-600 flex rounded-full min-w-l' >
            {gifFilter.map((data) => (
                <span key={data.value} className={`font-bold px-5 py-2 w-1/3 text-center rounded-full cursor-pointer ${filter === data.value ? data.background : ""}`}
                      onClick={() => setFilter(data.value)}>
                    {data.title}
                </span>
            ))}
        </div>
    </div>
  )
}

export default GifFilter