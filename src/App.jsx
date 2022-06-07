import { Row } from "./components/Row";
import requests from "./requests";

function App() {
  return (
    <div className="App">
     <Row title="Netlix Originals" requestUrl={requests.fetchNetflixOriginals}/>
     <Row title="Top Trending" requestUrl={requests.fetchTrending}/>
    </div>
  );
}

export default App;
