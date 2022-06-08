import { Row } from "./components/Row";
import requests from "./requests";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Search";
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
import Search from "./components/Search";
import NetflixOriginals from "./components/sections/NetflixOriginals";
import TopRated from "./components/sections/TopRated";
import TopTrending from "./components/sections/TopTrending";

function App() {
  const location = useLocation();

  const [selected, setSelected] = useState({});
  const [category, setCategory] = useState("");

  useEffect(() => {
    console.log("selected", selected);
    console.log(location.pathname);
    console.log(category);
  }, []);

  return (
    <div className="App min-h-screen text-white">
      <div className="flex justify-between bg-black">
        <Navbar />
        <Routes>
          <Route
            path={
              location.pathname === "/" ||
              Array(location.pathname.split("").splice(1, 7).toString())
                .join()
                .replace(/,/g, "") === "section"
                ? `/${String(selected.id)}`
                : location.pathname
            }
            element={<Selected selected={selected} setSelected={setSelected} />}
          />
          <Route
            path={`/section/netflixoriginals`}
            element={<NetflixOriginals />}
          />
          <Route path={`/section/toprated`} element={<TopRated />} />
          <Route path={`/section/toptrending`} element={<TopTrending />} />

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
        </Routes>
      </div>
    </div>
  );
}

export default App;
