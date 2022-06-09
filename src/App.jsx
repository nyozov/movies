import { Row } from "./components/Row";
import requests from "./requests";
import urlHelper from "./urlHelper";
import Navbar from "./components/Navbar";
import { useState, useEffect } from "react";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate,
  Navigate,
  useLocation,
} from "react-router-dom";
import Selected from "./components/Selected";

import NetflixOriginals from "./components/sections/NetflixOriginals";
import TopRated from "./components/sections/TopRated";
import TopTrending from "./components/sections/TopTrending";
import SearchResult from "./components/sections/SearchResult";
import Section from "./components/Section";

function App() {
  const location = useLocation();

  const [selected, setSelected] = useState({});
  const [category, setCategory] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    console.log("selected", selected);
    console.log(location.pathname);
    console.log(category);
  }, []);

  return (
    <div className="App min-h-screen overflow-x-clip text-white">
      <div className="flex justify-between bg-black">
        <Navbar searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>
        <Routes>

          {/* routing for selected tv show */}
          <Route
            path={
              location.pathname === "/" ||
              Array(location.pathname.split("").splice(1, 7).toString())
                .join()
                .replace(/,/g, "") === "section"
                ||
                location.pathname === "/" ||
              Array(location.pathname.split("").splice(1, 6).toString())
                .join()
                .replace(/,/g, "") === "search"
                ? `/${String(selected.id)}`
                : location.pathname
            }
            element={<Selected selected={selected} setSelected={setSelected} />}
          />
          <Route path={
           Array(location.pathname.split("").splice(1, 6).toString())
           .join()
           .replace(/,/g, "") === "search"
           ? location.pathname
           : `/search=${searchQuery}`
        
        
        
        } element={<SearchResult searchQuery={searchQuery} setSearchQuery={setSearchQuery} setSelected={setSelected}/>}/>
         
          {/* <Route
            path={`/section/netflixoriginals`}
            element={<NetflixOriginals setSelected={setSelected}/>}
          />
          <Route path={`/section/toprated`} element={<TopRated setSelected={setSelected}/>} />
          <Route path={`/section/toptrending`} element={<TopTrending setSelected={setSelected}/>} /> */}

          <Route
            path="/"
            element={
              <div className="-z-index-10 p-6">
                <Row
                  title="Netflix Originals"
                  requestUrl={requests.fetchNetflixOriginals}
                  setSelected={setSelected}
                  selected={selected}
                  setCategory={setCategory}
                />

                <Row
                  title="Top Trending"
                  requestUrl={requests.fetchTrending}
                  setSelected={setSelected}
                  selected={selected}
                  setCategory={setCategory}
                />
                <Row
                  title="Top Rated"
                  requestUrl={requests.fetchTopRated}
                  setSelected={setSelected}
                  selected={selected}
                  setCategory={setCategory}
                />
              </div>
            }
          />
          <Route path={
            location.pathname.slice(1,8) === 'section' ?
            location.pathname
            : '/'
        
        } element={<Section setSelected={setSelected} requestUrl={urlHelper(location.pathname.slice(9))}/>}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
