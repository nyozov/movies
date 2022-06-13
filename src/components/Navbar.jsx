import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useNavigate, Link } from "react-router-dom";
import { AiOutlineStar } from "react-icons/ai";
import Search from "./Search";

//genres list - displayed on navbar
const genres = [
  { name: "Action" },
  { name: "Comedy" },
  { name: "Animation" },
  { name: "Drama" },
  { name: "Documentary" },
  { name: "Mystery" },
  { name: "Crime" },
  { name: "Reality" },
];

const sections = [
  { name: "Netflix Originals", link:'netflixoriginals' },
  { name: "Top Trending", link:'toptrending' },
  { name: "Top Rated", link:'toprated' },
];

//framer-motion transition
const spring = {
  type: "spring",
  damping: 15,
  stiffness: 100,
  duration: 0.3,
};

export default function Home({ searchQuery, setSearchQuery }) {
  const [menu, setMenu] = useState(false);

  //react-router helper
  const navigate = useNavigate();

  return (
    <>
      {
        <div
          onClick={() => setMenu(!menu)}
          className="fixed z-20 flex items-center justify-center rounded-r-md bg-gray-800 hover:bg-gray-700 text-gray-300 ml-0 cursor-pointer inset-0 mt-10 m-auto w-8 h-8"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-chevron-right"
            width={28}
            height={28}
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" />
            <polyline points="9 6 15 12 9 18" />
          </svg>
        </div>
      }

      <AnimatePresence>
        {menu && (
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            transition={spring}
            animate={{ opacity: 1, x: -10 }}
            exit={{ opacity: 0, x: -220 }}
            className="shadow  h-screen  z-40 fixed top-0 bg-gray-900  pt-10 w-64 lg:w-72"
          >
            <div className="px-8">
              <div className="flex items-center justify-between">
                <div className="w-full">
                  <h2 className="text-xl">TvHut</h2>
                </div>
                <div
                  onClick={() => setMenu(!menu)}
                  className="text-gray-700 ml-8 cursor-pointer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-chevron-left"
                    width={32}
                    height={32}
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <polyline points="15 6 9 12 15 18" />
                  </svg>
                </div>
              </div>
              <ul className="my-10 flex flex-wrap">
                <li className="w-1/2 flex justify-start mb-6 cursor-pointer">
                  <div
                    onClick={() => navigate("/")}
                    className="bg-gray-900 hover:bg-gray-700 rounded-md text-gray-400 flex flex-col justify-center items-center w-20 h-20 p-4"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-layout-kanban"
                      width={28}
                      height={28}
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" />
                      <line x1={4} y1={4} x2={10} y2={4} />
                      <line x1={14} y1={4} x2={20} y2={4} />
                      <rect x={4} y={8} width={6} height={12} rx={2} />
                      <rect x={14} y={8} width={6} height={6} rx={2} />
                    </svg>
                    <p className="mt-1 uppercase font-semibold text-xs">Home</p>
                  </div>
                </li>
                <li className="w-1/2 flex justify-start mb-6 cursor-pointer">
                  <div className="bg-gray-900 hover:bg-gray-700 rounded-md text-gray-400 flex flex-col justify-center items-center w-20 h-20 p-4">
                    <AiOutlineStar className="w-10 h-10" />

                    <p className="mt-1 uppercase font-semibold text-xs">
                      Favorites
                    </p>
                  </div>
                </li>
              </ul>
              <Search
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
                setMenu={setMenu}
              />
              <div className="flex items-center justify-between text-gray-600">
                <h4 className="uppercase font-semibold">Genres</h4>
                
              </div>

              <div className="grid grid-cols-2 gap-2 py-4">
                {genres.map((genre) => (
                  <Link to={`/section/${genre.name.toLowerCase()}`}>
                    <div className="bg-red-600 text-xs shadow font-semibold px-2 p-1 hover:bg-red-700 flex items-center justify-start cursor-pointer rounded-full text-white">
                      {genre.name}
                    </div>
                  </Link>
                ))}
              </div>
              <div className="flex items-center justify-between text-gray-600">
                <h4 className="uppercase font-semibold">Popular Sections</h4>
                
              </div>
              <div className="grid grid-cols-1 gap-2 py-4">
                {sections.map((section) => (
                  <Link to={`/section/${section.link.toLowerCase()}`}>
                    <div className="white-glassmorphism text-xs text-gray-200 shadow font-semibold px-2 p-1 hover:border-gray-200 duration-150 flex items-center justify-start cursor-pointer rounded-full">
                      {section.name}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
            <div className="px-8 py-4 w-full border-t flex justify-center border-gray-800 items-center text-gray-600 uppercase text-xs">
              <div className="button-glassmorphism cursor-pointer text-gray-200 font-semibold shadow p-2 rounded-lg">
                Sign up for an Account
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
