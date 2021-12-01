import "./App.css";

import { Banner } from "./Banner";
import { NavBar } from "./NavBar";
import { Row } from "./Row";
import { requests } from "./requests";

const App = () => {
  return (
    <>
      <div className="App">
        <NavBar />
        <Banner />
        <Row
          isLargeRow
          title="Netflix Originals"
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
