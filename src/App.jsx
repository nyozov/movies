import { Row } from "./components/Row";
import requests from "./requests";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate,
  Navigate,
  useLocation
} from "react-router-dom";
import Selected from "./components/Selected";

function App() {
  const location = useLocation()

  const [selected, setSelected] = useState({});
  
  useEffect(() => {
   console.log('selected', selected)
   console.log(location.pathname)
  }, [])
  

  
 
  return (
    <div className="App min-h-screen min-w-screen text-white overflow-clip">
      <Sidebar />
      <div className="flex justify-between bg-black">
        <Navbar />
        <Routes>
          <Route path={location.pathname === '/' ? `/${String(selected.id)}` : location.pathname} element={<Selected selected={selected} setSelected={setSelected}/>} />

          <Route
            path='/'
            element={
              <div className="-z-index-10 p-6">
                <Row
                  title="Netlix Originals"
                  requestUrl={requests.fetchNetflixOriginals}
                  setSelected={setSelected}
                  selected={selected}
                />

                <Row
                  title="Top Trending"
                  requestUrl={requests.fetchTrending}
                  setSelected={setSelected}
                  selected={selected}
                />
                <Row
                  title="Top Rated ⭐"
                  requestUrl={requests.fetchTopRated}
                  setSelected={setSelected}
                  selected={selected}
                />
              </div>
            }
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
