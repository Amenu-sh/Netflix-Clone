const APIKEY = process.env.REACT_APP_NETFLIX_API_KEY;
// const APIKEY="9dd0988b3a50501f679b7a478367a855"

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

//https://api.themoviedb.org/3/movie/550?api_key=9dd0988b3a50501f679b7a478367a855&language=en-us
