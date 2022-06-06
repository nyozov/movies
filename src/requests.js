const api_key = process.env.REACT_APP_API_KEY

export default {
  fetchTrending: `/trending/all/week?/api_key=${api_key}&language=en-US`,
  fetchNetflixOriginals: `/discover/tv?/api_key=${api_key}&with_networks=213`,
  fetchTopRated: `/movie/top_rated?api_key=${api_key}&language=en-US`,

}