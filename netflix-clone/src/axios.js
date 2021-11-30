import axios from "axios";

export const movieUrl = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});
