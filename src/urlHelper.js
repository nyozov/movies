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
  }
};

export default urlHelper;
