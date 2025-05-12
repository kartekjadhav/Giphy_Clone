import React, { useEffect } from 'react'
import { useGifphy } from '../contexts/GifProvider'
import Gif from '../components/Gif'
import GifFilter from '../components/GifFilter'
const Home = () => {
  const {gf, gifs, setGifs, filter, setFilter, favourites, setFavourites} = useGifphy()
  async function fetchGifs(){
    const { data } = await gf.trending({ limit: 25, rating: 'g', type: filter })
    setGifs(data)
    console.log(data);
    
  }
  
  useEffect(() => {
    fetchGifs()
    print("My gifs",gifs)
  }, [filter])

  return (
    <div>
      <img src="/banner.gif" alt="banner" className='w-full mt-3 rounded-lg' />
      <GifFilter/>
      <div className='columns-2 md:columns-3 lg:columns-4 xl:columns-5 mt-3 gap-3'>
        {gifs.map((gif) => {
          return <Gif gif={gif} hover={true}  />
        })}
      </div>
    </div>
  )
}

export default Home