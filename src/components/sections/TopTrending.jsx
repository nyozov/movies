import {useState, useEffect} from 'react'
import axios from 'axios';


function TopTrending() {
const [shows, setShows] = useState([])
  // useEffect(() => {
  
  //   const fetchData = async () => {
  //     const request = await axios.get(requestUrl);
  //     console.log(request.data.results);

  //     setShows(request.data.results);
    
  //   };
  //   fetchData();
  // }, [requestUrl]);
  return (
    <div>Top Trending</div>
  )
}

export default TopTrending