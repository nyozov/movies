
import {useState} from "react";
import { BsChevronDown, BsChevronUp } from 'react-icons/bs'
import { AnimatePresence, motion } from 'framer-motion'

const spring = {
  type: "spring",
  damping: 15,
  stiffness: 100,
  duration: 0.3,
  
};

const genres = [{name:'Action'}, {name:'Comedy'}, {name:'Horror'}, {name:'Romance'}]

function Sidebar() {
  const [open, setOpen] = useState(false)
  return (
    <>

<div>




<div className="py-12 px-4 w-1/2">
  <div className="lg:max-w-[300px] w-1/4 mx-auto absolute top-2 right-2">
    <div className="flex justify-center items-center">
      <svg className="absolute z-20 cursor-pointer top-[13px] left-4" width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14.2716 13.1684L11.3313 10.2281C12.0391 9.28574 12.4213 8.13865 12.42 6.96C12.42 3.94938 9.97063 1.5 6.96 1.5C3.94938 1.5 1.5 3.94938 1.5 6.96C1.5 9.97063 3.94938 12.42 6.96 12.42C8.13865 12.4213 9.28574 12.0391 10.2281 11.3313L13.1684 14.2716C13.3173 14.4046 13.5114 14.4756 13.711 14.47C13.9105 14.4645 14.1004 14.3827 14.2415 14.2415C14.3827 14.1004 14.4645 13.9105 14.47 13.711C14.4756 13.5114 14.4046 13.3173 14.2716 13.1684ZM3.06 6.96C3.06 6.18865 3.28873 5.43463 3.71727 4.79328C4.14581 4.15192 4.7549 3.65205 5.46754 3.35687C6.18017 3.06169 6.96433 2.98446 7.72085 3.13494C8.47738 3.28542 9.17229 3.65686 9.71772 4.20228C10.2631 4.74771 10.6346 5.44262 10.7851 6.19915C10.9355 6.95567 10.8583 7.73983 10.5631 8.45247C10.268 9.1651 9.76808 9.77419 9.12673 10.2027C8.48537 10.6313 7.73135 10.86 6.96 10.86C5.92604 10.8588 4.93478 10.4475 4.20365 9.71635C3.47253 8.98522 3.06124 7.99396 3.06 6.96Z" fill="#4B5563" />
      </svg>
     
      
      <input className="relative h-10 text-sm leading-none text-gray-600 duration-150 bg-gray-800  rounded-full w-full px-10 py-4 outline-none" type="text" name id placeholder="Search Movies" />
   
   <div className='bg-gray-800 hover:bg-gray-700 cursor-pointer z-20 p-1 ml-3 rounded-full flex justify-center items-center'>
  {open ? <BsChevronUp className='duration-150' onClick={()=>setOpen(false)}/> : <BsChevronDown className='duration-150' onClick={()=>setOpen(true)}/>}
 

   </div>
    </div>
  </div>
  <AnimatePresence>
  {open && (
    
  <motion.div 
  initial={{ opacity: 0, y: -100 }}
  transition={spring}
  animate={{ opacity: 1, y: 0 }}
  exit={{ opacity: 0, y: -220 }}
  
  className="lg:max-w-[300px] rounded absolute right-0 top-7 w-1/3 mx-auto bg-gray-800 mt-8 px-6 py-6">
    <svg className="absolute right-2 top-2 cursor-pointer" width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9.06046 8.00032L12.0292 5.03157C12.1701 4.89093 12.2494 4.70007 12.2495 4.50099C12.2497 4.30191 12.1708 4.11091 12.0301 3.97001C11.8895 3.82912 11.6986 3.74986 11.4996 3.74969C11.3005 3.74951 11.1095 3.82843 10.9686 3.96907L7.99984 6.93782L5.03109 3.96907C4.89019 3.82818 4.69909 3.74902 4.49984 3.74902C4.30058 3.74902 4.10948 3.82818 3.96859 3.96907C3.82769 4.10997 3.74854 4.30107 3.74854 4.50032C3.74854 4.69958 3.82769 4.89068 3.96859 5.03157L6.93734 8.00032L3.96859 10.9691C3.82769 11.11 3.74854 11.3011 3.74854 11.5003C3.74854 11.6996 3.82769 11.8907 3.96859 12.0316C4.10948 12.1725 4.30058 12.2516 4.49984 12.2516C4.69909 12.2516 4.89019 12.1725 5.03109 12.0316L7.99984 9.06282L10.9686 12.0316C11.1095 12.1725 11.3006 12.2516 11.4998 12.2516C11.6991 12.2516 11.8902 12.1725 12.0311 12.0316C12.172 11.8907 12.2511 11.6996 12.2511 11.5003C12.2511 11.3011 12.172 11.11 12.0311 10.9691L9.06046 8.00032Z" fill="#1F2937" />
    </svg>
    <div>
      <p className='py-4 text-sm text-gray-400'>Popular Genres</p>

    <div className='grid grid-cols-2 gap-2'>
      {genres.map((genre) => (
        <div className='bg-red-600 text-xs shadow font-semibold px-2 p-1 hover:bg-red-700 flex items-center justify-start cursor-pointer rounded-full text-white'>{genre.name}</div>
        ))}

    </div>
        </div>
   
    
    
  
    
  </motion.div>
  )}
  </AnimatePresence>
</div>

</div>


    </>
  );
}

export default Sidebar;
