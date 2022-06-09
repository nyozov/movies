import {useState, useEffect} from 'react'
import { motion } from 'framer-motion';
import axios from  '../axios';
import requests from '../requests';
import urlHelper from '../urlHelper';
import Loading from './Loading';
import { useNavigate, useLocation } from 'react-router-dom';
const baseUrl = "https://image.tmdb.org/t/p/original/";

function Section({setSelected, requestUrl}) {

const [shows, setShows] = useState([])
const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
  
    const fetchData = async () => {
      const request = await axios.get(requests[requestUrl]);
      console.log(request.data.results);

      setShows(request.data.results);
    setLoading(false)
    
    };
    fetchData();
  }, []);
  const navigate = useNavigate();
  const location = useLocation();
  const handleClick = (movie) => {
    setSelected(movie);

    navigate(`/${String(movie.id)}`);
  }
  return (
    <div className="row p-6 transition-150">
      <div className="flex justify-start items-center">
        <h2 className="text-lg font-bold">{location.pathname.slice(9)}</h2>
      
      </div>
      <div className='flex justify-center'>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-7 gap-2 ">
        {loading && <Loading />}
        {!loading && shows &&
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

export default Section