const API_KEY = "cf35f56c96df796a8f2ba2bb112a1b5d";

const categories = [
  {
    name: "trending",
    title: "Trending",
    path: `/trending/all/week?api_key=${API_KEY}&language=pt-pt`,
    isLarge: false,
  },
  {
    name: "netflixOriginals",
    title: " Netflix Originals",
    path: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    isLarge: false,
  },
  {
    name: "topRated",
    title: "Popular",
    path: `/movie/top_rated?api_key=${API_KEY}&language=pt-pt`,
    isLarge: false,
  },
  {
    name: "comedy",
    title: "Comedy",
    path: `/trending/tv?api_key=${API_KEY}&with_genres=35`,
    isLarge: false,
  },
  {
    name: "romances",
    title: "Romances",
    path: `/trending/tv?api_key=${API_KEY}&with_genres=1074`,
    isLarge: false,
  },
  {
    name: "documentaries",
    title: "Documentaries",
    path: `/trending/tv?api_key=${API_KEY}&with_genres=99`,
    isLarge: false,
  },
];

export const getMovies = async (path) => {
  try {
    let url = `https://api.themoviedb.org/3${path}`;
    const response = await fetch(url);
    return await response.json();
  } catch (error) {
    console.log("error getMovies; ", error);
  }
};

export default categories;
