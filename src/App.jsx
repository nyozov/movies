import { Row } from "./components/Row";
import requests from "./requests";
import Navbar from "./components/Navbar"
import Sidebar from "./components/Sidebar";
import { useState } from 'react'


function App() {
 
  return (
    <div className="App bg-black text-white">
    
     
      <Sidebar/>
      <div className='flex justify-between'>

      <Navbar/>
      <div className='-z-index-10 ml-5'>

     <Row title="Netlix Originals" requestUrl={requests.fetchNetflixOriginals}/>
     <Row title="Top Trending" requestUrl={requests.fetchTrending}/>
     <Row title="Top Rated ⭐" requestUrl={requests.fetchTopRated}/>
      </div>
      </div>
     
     
    </div>
  );
}

export default App;
