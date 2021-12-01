import axios from "axios";

export const baseURl = "https://bayut.p.rapidapi.com";

export const fetchApi = async (url) => {
  const { data } = await axios.get(url, {
    headers: {
      "x-rapidapi-host": "bayut.p.rapidapi.com",
      "x-rapidapi-key": "ea78c1384emsh535cfd31ac39c7ap1af1aajsn8a61be93967f",
    },
  });
  return data;
};
