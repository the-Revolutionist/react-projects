import "./row.css";

import { useEffect, useState } from "react";

import { movieUrl as axios } from "./axios";
import { movieRowPicUrl as imgUrl } from "./requests";

export const Row = ({ title, fetchUrl, isLargeRow }) => {
  const [movies, setMovies] = useState([]);
  //^   useEffect cannot be run async itself you
  //^   must set up async method inside useEffect
  //^   then call the method from inside useEffect
  useEffect(() => {
    //* write async method
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    //* call method
    fetchData();
  }, [fetchUrl]);

  return (
    <>
      <div className="row">
        <h2> {title}</h2>
        <div className="row__posters">
          {movies.map((movie) => (
            <img
              key={movie.id}
              className={`${isLargeRow ? "row__posterLarge" : "row__poster"}`}
              src={`${imgUrl}${
                isLargeRow ? movie.poster_path : movie.backdrop_path
              }`}
              alt={movie.name}
            />
          ))}
        </div>
      </div>
    </>
  );
};
