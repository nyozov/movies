
function Loading() {
  return (
    <div className='flex flex-col absolute -z-30 bg-black left-0 top-0 right-0 h-full w-full justify-center items-center text-white'>
     
        <svg className="animate-spin h-10 w-10 border-4 rounded-full " viewBox="0 0 24 24"></svg>
       Loading media...
      
    </div>
  );
}

export default Loading;
