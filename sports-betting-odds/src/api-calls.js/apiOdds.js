import axios from "axios";

// var options = {
//   method: 'GET',
//   url: 'https://odds.p.rapidapi.com/v1/sports',
//   headers: {
//     'x-rapidapi-host': 'odds.p.rapidapi.com',
//     'x-rapidapi-key': 'ea78c1384emsh535cfd31ac39c7ap1af1aajsn8a61be93967f'
//   }
// };

// axios.request(options).then(function (response) {
// 	console.log(response.data.data[0]);
// }).catch(function (error) {
// 	console.error(error);
// });

const options = {
  method: "GET",
  url: "https://odds.p.rapidapi.com/v1/odds",
  params: {
    sport: "americanfootball_nfl",
    region: "us",
    mkt: "h2h",
    dateFormat: "iso",
    oddsFormat: "decimal",
  },
  headers: {
    "x-rapidapi-host": "odds.p.rapidapi.com",
    "x-rapidapi-key": "ea78c1384emsh535cfd31ac39c7ap1af1aajsn8a61be93967f",
  },
};
export const oddRequest = axios
  .request(options)
  .then(function (response) {
    console.log(response.data.data[0].sites[0].odds.h2h[1]);
    // console.log(response.data.data[0].sites[0].odds.h2h);
    // console.log(response.data.data[0].sites[0].odds);
    // console.log(response.data.data[0].sites[0]);
    // console.log(response.data.data[0].sites);
    // console.log(response.data.data[0]);
    // console.log(response.data.data);
    // console.log(response.data);
    // console.log(response);
  })
  .catch(function (error) {
    console.error(error);
  });
