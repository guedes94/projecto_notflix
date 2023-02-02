import React, { useEffect } from "react";
import { getMovies } from "../api";
import "./Row.css";
import "./Row.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro"; // <-- import styles to be used

const imageHost = "https://image.tmdb.org/t/p/original/";
function Row({ title, path, isLarge }) {
  const [movies, setMovies] = React.useState([]);
  const [favorite, setFavorite] = React.useState([]);

  const fetchMovies = async (_path) => {
    try {
      const data = await getMovies(_path);
      console.log("data ", data);
      setMovies(data?.results);
    } catch (error) {
      console.log("fetchMovies error: ", error);
    }
  };

  useEffect(() => {
    fetchMovies(path);
  }, [path]);

  const addToFavorite = (movie) => {

    if(favorite.some((movieFavorite) => movieFavorite.id === movie.id )){
      console.log("Já existe")
      return;
    }
    
    setFavorite([...favorite, movie])
  }

  useEffect(() => {
    console.log(favorite)
    localStorage.setItem('my_favorites', JSON.stringify(favorite))
  }, [favorite])

  return (
    <div className="row-container">
      <h2 className="row-header">{title}</h2>
      <div className="row-cards">
        {movies?.map((movie) => {
          return (
            <div key={movie.id} className="card">
              <FontAwesomeIcon
                onClick={() => addToFavorite(movie)}
                className="favorite-icon"
                icon={solid("heart")}
              />
              <img
                className={`movie-card ${isLarge && "movie-card-large"}`}
                key={movie.id}
                src={`${imageHost}${
                  isLarge ? movie.backdrop_path : movie.poster_path
                }`}
                alt={movie.name}
              ></img>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Row;
