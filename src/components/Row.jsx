import { useState, useEffect } from "react";
import axios from '../axios'
const baseUrl = "https://image.tmdb.org/t/p/original/";
export const Row = ({ title, requestUrl }) => {
  const [movies, setMovies] = useState([]);
  
  useEffect(() => {
    const fetchData = async () => {
      const request = await axios.get(requestUrl);
      console.log(request.data.results)
      setMovies(request.data.results)
    }
    fetchData();

  }, [requestUrl]);

  return (
    <div className='row'>
      <h2>{title}</h2>
      <div className='flex'>
        {movies.map(movie => (
          <img className='h-1/4 w-1/4' src={`${baseUrl}${movie.poster_path}`}/>
        ))}

      </div>
      {/* container - posters */}
    </div>
  );
};
