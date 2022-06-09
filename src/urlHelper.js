const urlHelper = (url) => {
  switch (url) {
    case "netflixoriginals":
      return "fetchNetflixOriginals";

    case "toptrending":
      return "fetchTrending";

    case "toprated":
      return "fetchTopRated";
    case "action":
      return "fetchAction";
    case "comedy":
      return "fetchComedy";
    case "drama":
      return "fetchDrama";
    case "animation":
      return "fetchAnimation";
    case "documentary":
      return "fetchDocumentary";
    case "mystery":
      return "fetchMystery";
    case "crime":
      return "fetchCrime";
    case "reality":
      return "fetchReality";
  }
};

export default urlHelper;
