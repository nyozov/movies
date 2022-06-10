const api_key = process.env.REACT_APP_API_KEY

//requests for moviedb api

export default {
  fetchTrending: `/trending/tv/week?api_key=${api_key}&language=en-US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${api_key}&with_networks=213`,
  fetchTopRated: `/tv/top_rated?api_key=${api_key}&language=en-US`,
  fetchAction: `/discover/tv?api_key=${api_key}&with_genres=10765`,
  fetchComedy: `/discover/tv?api_key=${api_key}&with_genres=35`,
  fetchDrama: `/discover/tv?api_key=${api_key}&with_genres=18`,
  fetchAnimation: `/discover/tv?api_key=${api_key}&with_genres=16`,
  fetchDocumentary: `/discover/tv?api_key=${api_key}&with_genres=99`,
  fetchMystery: `/discover/tv?api_key=${api_key}&with_genres=9648`,
  fetchCrime: `/discover/tv?api_key=${api_key}&with_genres=80`,
  fetchReality: `/discover/tv?api_key=${api_key}&with_genres=10764`,

 
  

}