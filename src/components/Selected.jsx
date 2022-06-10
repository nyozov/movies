import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { AiFillPlaySquare, AiFillStar } from "react-icons/ai";
import TrailerModal from "./TrailerModal";

const api_key = process.env.REACT_APP_API_KEY;
const baseUrl = "https://image.tmdb.org/t/p/original/";

function Selected({ selected, setSelected }) {
  const [modal, setModal] = useState(false);
  const [cast, setCast] = useState([]);

  //react-router helper
  const location = useLocation();

  //fetch and display information for selected show
  useEffect(() => {
    const fetchData = async () => {
      const request = await axios.get(
        `https://api.themoviedb.org/3/tv${location.pathname}?api_key=${api_key}`
      );
      setSelected(request.data);
    };
    (async () => await fetchData())();
  }, [location.pathname]);

  //fetch and display cast for selected show
  useEffect(() => {
    const fetchData = async () => {
      const request = await axios.get(
        `https://api.themoviedb.org/3/tv${location.pathname}/credits?api_key=${api_key}&language=en-US`
      );
      setCast(request.data.cast);
    };
    fetchData();
  }, []);

  return (
    <motion.div
      onClick={() => modal && setModal(false)}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="h-screen w-screen bg-transparent overflow-x-hidden flex justify-center flex-col items-center"
    >
      {/* open trailer modal onclick */}
      {modal && <TrailerModal selected={selected} setModal={setModal} />}
      <img
        className="duration-150 absolute top-0 left-0 object-cover h-[64vh] md:h-[70h] w-screen"
        src={`${baseUrl}${selected.backdrop_path}`}
      />
      <div className="dark-gradient absolute top-0 left-0 object-cover h-[64vh] md:h-[70h] w-full " />
      <div className="absolute top-0  flex justify-center h-full w-full items-center flex-col">
        <h2 className="text-shadow text-3xl font-semibold">
          {selected.name || selected.title}
        </h2>
        <div className="flex p-1 px-2 justify-center rounded-full items-center bg-[rgba(0,0,0,0.5)]">
          <AiFillStar className="text-yellow-500 text-shadow" />
          <p className="text-xs text-shadow">{selected.vote_average}</p>
        </div>
        <div className="flex mt-2 justify-evenly w-5/12 xl:w-4/12">
          {selected.genres &&
            selected.genres.map((genre) => (
              <div className="text-xs w-36  flex justify-center items-center text-semibold text-shadow shadow white-glassmorphism p-1 px-2">
                {genre.name}
              </div>
            ))}
        </div>
        <div
          onClick={() => setModal(true)}
          className="cursor-pointer font-semibold flex items-center justify-center shadow hover:border-gray-200 duration-150 button-glassmorphism mt-2 p-2 px-3"
        >
          Watch Trailer{" "}
          <AiFillPlaySquare className="text-white rounded-lg ml-2" />
        </div>
      </div>
      <div className="p-6 text-shadow flex flex-col justify-start w-full mt-[500px]">
        <h2 className="text-gray-300 font-semibold">Plot Summary</h2>
        <p className=" max-h-[100px] z-20 overflow-auto text-sm text-gray-400">
          {selected.overview}
        </p>
        <h2 className="text-gray-300 mt-2 font-semibold">Cast</h2>
        <div className="mt-2 flex z-10 overflow-x-scroll row__poster gap-4 justify-start items-start">
          {cast &&
            cast.map((actor) => (
              <div className="flex flex-col ml-6 justify-center items-center">
                <img
                  className="duration-150 w-12 h-12  rounded-full shadow object-cover"
                  src={`${baseUrl}${actor.profile_path}`}
                />
                <p className="text-gray-200 mt-1 text-center text-xs  w-24  md:w-24 font-semibold">
                  {actor.name}
                </p>
                <p className="text-xs font-light text-center w-24 md:w-24">
                  {actor.character}
                </p>
              </div>
            ))}
        </div>
      </div>
    </motion.div>
  );
}

export default Selected;
