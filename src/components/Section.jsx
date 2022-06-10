import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import axios from "../axios";
import requests from "../requests";
import Loading from "./Loading";

import { useNavigate, useLocation } from "react-router-dom";
const baseUrl = "https://image.tmdb.org/t/p/original/";

function Section({ setSelected, requestUrl }) {
  const [shows, setShows] = useState([]);
  const [loading, setLoading] = useState(false);

  // react-router helpers
  const navigate = useNavigate();
  const location = useLocation();

  //fetch requested section, display on screen
  useEffect(() => {
    setLoading(true);

    const fetchData = async () => {
      const request = await axios.get(requests[requestUrl]);
      setShows(request.data.results);
      setLoading(false);
    };
    fetchData();
  }, [requestUrl]);

  //navigate to selected show page
  const handleClick = (show) => {
    setSelected(show);

    navigate(`/${String(show.id)}`);
  };
  return (
    <div className="row p-6 transition-150 h-full bg-black">
      <div className="flex justify-start items-center bg-black h-full">
        <h2 className="text-lg font-bold">{location.pathname.slice(9)}</h2>
      </div>
      <div className="flex justify-center">
        <div className="grid bg-black h-full grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-7 gap-2 ">
          {loading && <Loading />}
          {!loading &&
            shows &&
            shows.map((show) => (
              <motion.img
                initial={{ x: 100, opacity: 0 }}
                onClick={() => handleClick(show)}
                animate={{ x: 0, opacity: 1 }}
                className="h-[300px] w-[250px] duration-150 img-filter cursor-pointer shadow object-cover mr-2 rounded"
                src={`${baseUrl}${show.poster_path}`}
              />
            ))}
        </div>
      </div>
    </div>
  );
}

export default Section;
