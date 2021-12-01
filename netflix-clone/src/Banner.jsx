import "./banner.css";

import { InfoOutlined, PlayArrow } from "@material-ui/icons";
import { movieRowPicUrl as picUrl, requests } from "./requests";
import { useEffect, useState } from "react";

import { movieUrl as axios } from "./axios";

export const Banner = () => {
  const [movie, setMovie] = useState([]);

  //^   useEffect cannot be run async itself you
  //^   must set up async method inside useEffect
  //^   then call the method from inside useEffect
  useEffect(() => {
    //* write async method
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length)
        ]
      );
      return request;
    }

    //* call async method
    fetchData();
  }, []);

  const bannerImgUrl = `${picUrl}${movie?.backdrop_path}`;
  const descSub = movie.overview?.toString();

  return (
    <>
      <header
        className="banner"
        style={{
          backgroundSize: "cover",
          backgroundImage: `url(${bannerImgUrl})`,
          backgroundPosition: "center center",
        }}
      >
        <div className="banner__contents">
          {/* {title}  */}
          <h1 className="banner__title">
            {movie?.name || movie?.title || movie?.original_name}
          </h1>
          {/* {div>2buttons} */}
          <div className="banner__buttons">
            <button className="banner__button__play">
              <PlayArrow style={{ paddingRight: 5 }} /> Play
            </button>
            <button className="banner__button__info">
              <InfoOutlined style={{ paddingRight: 5 }} /> More Info
            </button>
          </div>
          {movie.overview?.length > 500 ? (
            <h1 className="banner__description">
              {descSub?.substring(0, 200) + "..."}
            </h1>
          ) : (
            <h1 className="banner__description">
              {movie.overview?.toString()}
            </h1>
          )}
        </div>
        <div className="banner__fadeBottom" />
      </header>
    </>
  );
};
