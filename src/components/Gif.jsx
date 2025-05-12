import React from 'react'
import { Link } from 'react-router-dom'

const Gif = ({gif, hover=true}) => {
  return (
    <Link to={`/${gif.type}/${gif.slug}`}>
        <div className='cursor-pointer mb-3 w-full relative group'>
            <img src={gif?.images?.fixed_width?.webp} alt={gif.alt_text} className='w-full rounded-lg object-cover transition-all duration-300'/>
            {hover && 
                <div className='absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-b from-transparent via-transparent to-black flex items-end gap-2 font-bold p-2'>
                    <img src={gif?.user?.avatar_url} className='h-8'/>
                    <span>{gif?.user?.display_name}</span>
                </div>
            }
        </div>


    </Link>
  )
}

export default Gif