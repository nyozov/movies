import { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
// helpers
import requests from "./requests";
import urlHelper from "./urlHelper";
// components
import Navbar from "./components/Navbar";
import Row from "./components/Row";
import Selected from "./components/Selected";
import SearchResult from "./components/SearchResult";
import Section from "./components/Section";

function App() {
  
  const [selected, setSelected] = useState({});
  const [category, setCategory] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  
  //react-router helper
  const location = useLocation();

  return (
    <div className="App min-h-screen overflow-x-clip text-white bg-black ">
      <div className="flex justify-between">
        <Navbar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <Routes>
          {/* routing for selected tv show */}
          <Route
            path={
              location.pathname === "/" ||
              Array(location.pathname.split("").splice(1, 7).toString())
                .join()
                .replace(/,/g, "") === "section" ||
              location.pathname === "/" ||
              Array(location.pathname.split("").splice(1, 6).toString())
                .join()
                .replace(/,/g, "") === "search"
                ? `/${String(selected.id)}`
                : location.pathname
            }
            element={<Selected selected={selected} setSelected={setSelected} />}
          />
          {/* routing for search results page */}
          <Route
            path={
              Array(location.pathname.split("").splice(1, 6).toString())
                .join()
                .replace(/,/g, "") === "search"
                ? location.pathname
                : `/search=${searchQuery}`
            }
            element={
              <SearchResult
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
                setSelected={setSelected}
              />
            }
          />

          {/* routing for homepage */}
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
          {/* routing for selected genre */}
          <Route
            path={
              location.pathname.slice(1, 8) === "section"
                ? location.pathname
                : "/"
            }
            element={
              <Section
                setSelected={setSelected}
                requestUrl={urlHelper(location.pathname.slice(9))}
              />
            }
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
