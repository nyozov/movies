import {useState, useEffect} from 'react'
import axios from 'axios';
import requests from '../requests';
import Loading from './Loading';

function Section({title, requestUrl}) {
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
    <div>{title}</div>
  )
}

export default Section