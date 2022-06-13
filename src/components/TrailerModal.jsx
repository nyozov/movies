import { useEffect, useState } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { motion } from "framer-motion";
import axios from "axios";

const api_key = process.env.REACT_APP_API_KEY;

function TrailerModal({ setModal, selected }) {
  const [trailer, setTrailer] = useState("");

  //fetches first video from api for selected show - hopefully its the trailer
  useEffect(() => {
    const fetchData = async () => {
      const request = await axios.get(
        `https://api.themoviedb.org/3/tv/${selected.id}/videos?api_key=${api_key}&language=en-US`
      );
      setTrailer(request.data.results[0].key);
    };
    fetchData();
  }, []);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      onClick={(e) => e.stopPropagation()}
      className="absolute w-screen lg:w-3/4 2xl:w-8/12 h-[70vh] z-50 white-glassmorphism"
    >
      <div
        onClick={() => setModal(false)}
        className="top-2 right-2 absolute cursor-pointer"
      >
        <AiOutlineCloseCircle className="text-[rgba(255,255,255,0.5)] w-6 h-6 white-glassmorphism hover:border-white duration-150" />
      </div>
      <div className="flex justify-center items-center w-full h-full">
        <iframe
          className="w-full h-3/4 md:h-full md:w-full rounded-lg shadow"
          src={`https://www.youtube.com/embed/${trailer}`}
          frameborder="0"
          allow="autoplay; encrypted-media"
          allowfullscreen
          title="video"
        />
      </div>
    </motion.div>
  );
}

export default TrailerModal;
