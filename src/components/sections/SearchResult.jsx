import React from 'react'
import { useEffect, useState } from 'react'
import Loading from '../Loading';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';
import {motion} from 'framer-motion'

import Search from '../Search';

const api_key = process.env.REACT_APP_API_KEY
const baseUrl = "https://image.tmdb.org/t/p/original/";

function SearchResult({setSelected, searchQuery, setSearchQuery}) {
  const [loading, setLoading] = useState(false);
  const [shows, setShows] = useState([]);
 
  const location = useLocation()
  const navigate = useNavigate()
  useEffect(() => {
    const fetchData = async () => {
      const searchQuery = location.pathname.slice(8)
      const request = await axios.get(
        `https://api.themoviedb.org/3/search/tv?api_key=${api_key}&language=en-US&query=${searchQuery}&page=1&include_adult=false`
      );
      console.log(request.data.results);
      setShows(request.data.results);
    };
    (async () => await fetchData())();
  }, [location.pathname]);
  const handleClick = (movie) => {
    setSelected(movie);

    navigate(`/${String(movie.id)}`);
  }
  
  return (
    <div className="row p-6 transition-150">
      <div className="flex justify-start flex-col items-center">
        <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>
        <p className="text-xs font-light">search for: {location.pathname.slice(8).split('%20').join(" ")}</p>
      
      </div>
      <div className='flex justify-center mt-2'>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-7 gap-2 ">
        {loading && <Loading />}
        {!loading &&
          shows.map((movie) => (
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              onClick={()=>handleClick(movie)}
              animate={{ x: 0, opacity: 1 }}
              className="h-[350px] w-[250px] duration-150 img-filter cursor-pointer shadow object-cover mr-2 rounded"
              src={`${baseUrl}${movie.poster_path}`}
            />
          ))}
      </div>
      </div>
    </div>
  )
}

export default SearchResult