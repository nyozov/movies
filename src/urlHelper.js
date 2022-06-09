const urlHelper = (url) => {
  switch (url) {
    case "netflixoriginals":
      return "fetchNetflixOriginals";

    case "toptrending":
      return "fetchTrending";

    case "toprated":
      return "fetchTopRated";
  }
};

export default urlHelper;