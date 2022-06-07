import { useState, useEffect } from "react";
import { AiOutlineRight } from "react-icons/ai";
import axios from "../axios";
import Loading from "./Loading";
const baseUrl = "https://image.tmdb.org/t/p/original/";

export const Row = ({ title, requestUrl }) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      const request = await axios.get(requestUrl);
      console.log(request.data.results);

      setMovies(request.data.results);
      setTimeout(() => setLoading(false), 2000);
    };
    fetchData();
  }, [requestUrl]);

  return (
    <div className="row p-6 transition-150">
      {loading ? (
        <Loading />
      ) : (
        <>
          <div className="flex justify-start items-center">
            <h2 className="text-lg font-bold">{title}</h2>
            <p className="ml-2 text-gray-500 text-xs cursor-pointer hover:text-gray-400 font-medium flex items-center">
              See All <AiOutlineRight />
            </p>
          </div>
          <div className="flex overflow-x-hidden">
            {movies.map((movie) => (
              <img
                className="duration-150 shadow object-contain h-1/4 w-1/4 md:h-2/12 md:w-2/12 mr-2 rounded"
                src={`${baseUrl}${movie.poster_path}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};
