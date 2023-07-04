// const API_KEY = process.env.API_KEY;
const API_KEY = "ac5ad5908e61a2da0f0ce2825d3b2788";

// export default {
//   fetchTrending: `/trending/all/week?api_key=${API_KEY}& language=en-US`,
//   fetchTopRated: `/movie/top_rated?api_key=${API_KEY}& language=en-US`,
//   fetxhActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
//   fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
//   fetchComdeyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
//   fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
//   fetchMystry: `/discover/movie?api_key=${API_KEY}&with_genres=9648`,
//   fetchSciFi: `/discover/movie?api_key=${API_KEY}&with_genres=878`,
//   fetchWestern: `/discover/movie?api_key=${API_KEY}&with_genres=37`,
//   fetchAnimation: `/discover/movie?api_key=${API_KEY}&with_genres=16`,
//   fetchTV: `/discover/movie?api_key=${API_KEY}&with_genres=10770`,
// };

export default {
  fetchTrending: {
    title: "Trending",
    url: `/trending/all/week?api_key=${API_KEY}& language=en-US`,
  },
  fetchTopRated: {
    title: "TopRated",
    url: `/movie/top_rated?api_key=${API_KEY}& language=en-US`,
  },
  fetxhActionMovies: {
    title: "ActionMovies",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  },
  fetchHorrorMovies: {
    title: "HorrorMovies",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  },
  fetchComdeyMovies: {
    title: "ComdeyMovies",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  },
  fetchRomanceMovies: {
    title: "RomanceMovies",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  },
  fetchMystry: {
    title: "Mystry",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=9648`,
  },
  fetchSciFi: {
    title: "SciFi",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=878`,
  },
  fetchWestern: {
    title: "Western",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=37`,
  },
  fetchAnimation: {
    title: "Animation",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=16`,
  },
  fetchTV: {
    title: "TV",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=10770`,
  },
};
