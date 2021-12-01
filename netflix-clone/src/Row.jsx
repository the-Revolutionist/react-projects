import "./row.css";

import { useEffect, useState } from "react";

import YouTube from "react-youtube";
import { movieUrl as axios } from "./axios";
import { movieRowPicUrl as imgUrl } from "./requests";
import movieTrailer from "movie-trailer";

export const Row = ({ title, fetchUrl, isLargeRow }) => {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");
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

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
      //?   Read on setting up youtube videos at the link below
      //?   https://developers.google.com/youtube/player_parameters,
    },
  };

  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    }
    if (!trailerUrl) {
      movieTrailer(movie?.name)
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((error) => console.log(error));
    }
  };

  return (
    <>
      <div className="row">
        <h2> {title}</h2>
        <div className="row__posters">
          {movies.map((movie) => (
            <img
              onClick={() => handleClick(movie)}
              key={movie.id}
              className={`${isLargeRow ? "row__posterLarge" : "row__poster"}`}
              src={`${imgUrl}${
                isLargeRow ? movie.poster_path : movie.backdrop_path
              }`}
              alt={movie.name}
            />
          ))}
        </div>
        {trailerUrl && <YouTube videoId={trailerUrl} opt={() => opts} />}
      </div>
    </>
  );
};
