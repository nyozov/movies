import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Navigate, useNavigate, Link } from "react-router-dom";
import Search from "./Search";
const genres = [
  { name: "Action" },
  { name: "Comedy" },
  { name: "Horror" },
  { name: "Romance" },
];

export default function Home() {
  const navigate = useNavigate()
  const [query, setQuery] = useState("");
  const spring = {
    type: "spring",
    damping: 15,
    stiffness: 100,
    duration: 0.3,
  };

  console.log("query", query);
  const [menu, setMenu] = useState(false);
 
  return (
    <>
      {
        <div
          onClick={() => setMenu(!menu)}
          className="fixed z-10 flex items-center justify-center rounded-r-md bg-gray-800 hover:bg-gray-700 text-gray-300 ml-0 cursor-pointer inset-0 mt-10 m-auto w-8 h-8"
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
                  <h2 className='text-xl'>Tv Show App</h2>
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
                  <div onClick={()=>navigate('/')}
                    
                    className= "bg-gray-900 hover:bg-gray-700 rounded-md text-gray-400 flex flex-col justify-center items-center w-20 h-20 p-4"
                      
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
                    <p className="mt-1 uppercase font-semibold text-xs">
                      Home
                    </p>
                  </div>
                </li>
                <li className="w-1/2 flex justify-end mb-6">
                  <a
                    href="javascript:void(0)"
                    className={
                   
                       
                        "bg-transparent rounded-md text-gray-600 flex flex-col justify-center items-center w-20 h-20 p-4"
                    }
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-inbox"
                      width={20}
                      height={20}
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" />
                      <rect x={4} y={4} width={16} height={16} rx={2} />
                      <path d="M4 13h3l3 3h4l3 -3h3" />
                    </svg>
                    <p className="mt-1 uppercase font-semibold text-xs">
                      inbox
                    </p>
                  </a>
                </li>
              
               
               
               
                
              </ul>
                <Search/>
              <div className="flex items-center justify-between text-gray-600">
                <h4 className="uppercase font-semibold">Genres</h4>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="cursor-pointer icon icon-tabler icon-tabler-plus"
                  width={20}
                  height={20}
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <line x1={12} y1={5} x2={12} y2={19} />
                  <line x1={5} y1={12} x2={19} y2={12} />
                </svg>
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
             
            </div>
            <div className="px-8 py-4 w-full border-t border-gray-800 flex items-center text-gray-600 uppercase text-xs">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="cursor-pointer icon icon-tabler icon-tabler-trash"
                width={18}
                height={18}
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" />
                <line x1={4} y1={7} x2={20} y2={7} />
                <line x1={10} y1={11} x2={10} y2={17} />
                <line x1={14} y1={11} x2={14} y2={17} />
                <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
                <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
              </svg>
              <p className="cursor-pointer pl-2">trash</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
