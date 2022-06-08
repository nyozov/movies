import { useEffect } from "react";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import axios from "axios";
const api_key = process.env.REACT_APP_API_KEY
const baseUrl = "https://image.tmdb.org/t/p/original/";
function Selected({ selected, setSelected }) {
  
  
  const location = useLocation()
  console.log('pathname', location.pathname)
  useEffect(() => {
    const fetchData = async () => {
      const request = await axios.get(`https://api.themoviedb.org/3/tv${location.pathname}?api_key=${api_key}`);
      console.log(request.data);
      setSelected(request.data)

     
      
    };
    (async () =>  await fetchData())();
  }, [location.pathname]);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="h-screen w-screen bg-transparent flex justify-center flex-col items-center"
    >
     
      <img className="absolute top-0 left-0 object-cover h-[70vh] w-screen" src={`${baseUrl}${selected.backdrop_path}`} />
     <div className='z-10'>

      <h2 className='text-shadow text-3xl font-semibold'>
        {selected.name || selected.title}</h2>
      <p>Average score: {selected.vote_average}</p>
      <p>{selected.overview}</p>
     </div>
    </motion.div>
  );
}

export default Selected;
