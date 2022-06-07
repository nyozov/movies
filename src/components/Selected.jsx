import React from 'react'
const baseUrl = "https://image.tmdb.org/t/p/original/";
function Selected({selected}) {
  return (
    <div className='h-screen w-screen '>
      <img className=''
      
      src={`${baseUrl}${selected.backdrop_path}`}/>
      {selected.original_name || selected.original_title }
      </div>
  )
}

export default Selected