import React, { useEffect, useState } from 'react'
import { useGifphy } from '../contexts/GifProvider'
import Gif from '../components/Gif'
import GifFilter from '../components/GifFilter'


const Home = () => {
  const {gf, gifs, setGifs, filter, setFilter, favourites, setFavourites} = useGifphy()
  const [loading, setLoading] = useState(false)

  async function fetchGifs(){
    setLoading(true)
    const { data } = await gf.trending({ limit: 25, rating: 'g', type: filter })
    setGifs(data)    
    setLoading(false)
  }
   
  console.log(gifs);
  

  useEffect(() => {
    fetchGifs()
  }, [filter])

  if (loading) {
    return <strong>Loading...</strong>
  }

  return (
    <div>
      <img src="/banner.gif" alt="banner" className='w-full mt-3 rounded-lg' />
      <GifFilter/>
      <div className='columns-2 md:columns-3 lg:columns-4 xl:columns-5 mt-3 gap-3'>
        {gifs.map((gif, index) => {
          return <Gif gif={gif} hover={true} key={index} />
        })}
      </div>
    </div>
  )
}

export default Home