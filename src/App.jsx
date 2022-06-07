import { Row } from "./components/Row";
import requests from "./requests";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate,
  Navigate,
} from "react-router-dom";
import Selected from "./components/Selected";

function App() {
  
  const [selected, setSelected] = useState({});
 
  return (
    <div className="App bg-black min-h-screen min-w-screen text-white overflow-clip">
      <Sidebar />
      <div className="flex justify-between">
        <Navbar />
        <Routes>
          <Route path={`/${String(selected.id)}`} element={<Selected selected={selected} />} />

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
