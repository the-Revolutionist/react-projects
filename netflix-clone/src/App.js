import "./App.css";

import { Row } from "./Row";
import { requests } from "./requests";

const App = () => {
  return (
    <>
      <div className="App">
        {/* {navbar} */}
        {/* {Banner} */}
        <Row
          isLargeRow
          title="NOTFLIX ORIGINALS"
          fetchUrl={requests.fetchNetflixOriginals}
        />
        <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
        <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
        <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
        <Row title="Comedies" fetchUrl={requests.fetchComedyMovies} />
        <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
        <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
        <Row title="Doctumentary" fetchUrl={requests.fetchTrending} />
      </div>
    </>
  );
};

export default App;
