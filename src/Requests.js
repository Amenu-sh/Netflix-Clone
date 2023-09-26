const APIKEY = process.env.REACT_APP_NETFLIX_API_KEY;

const request = {
  fetchTrending: `/trending/all/week?api_key=${APIKEY}&language=en-us`,
  fetchNetflixOriginals: `discover/tv?api_key=${APIKEY}&with_networks=213`,
  fetchTopRateMovies: `movie/top_rated?api_key=${APIKEY}&language=en-us`,
  fetchActionMovies: `discover/movie?api_key=${APIKEY}&with_genres=28`,
  fetchComedyMovies: `discover/movie?api_key=${APIKEY}&with_genres=35`,
  fetchHorrorMovies: `discover/movie?api_key=${APIKEY}&with_genres=27`,
  fetchRomanceMovies: `discover/movie?api_key=${APIKEY}&with_genres=10749`,
  fetchDocumentaries: `discover/movie?api_key=${APIKEY}&with_genres=99`,
};
export default request;

