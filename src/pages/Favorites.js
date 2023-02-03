import { useEffect, useState } from "react";
import "./Favorites.css";

const Favorites = () => {
  const [favoritos, setFavoritos] = useState([]);

  //Use effect que corre no inicio da nossa aplicação para configurar os favoritos
  useEffect(() => {
    console.log("Funciona aqui");
    const getFav = async () => {
        const localFavo = JSON.parse(localStorage.getItem("my_favorites"))
        setFavoritos(localFavo)
    }
    
    getFav()
  }, []);

  // Use effect que corre quando os favoritos são modificados
  useEffect(() => {
    console.log("Funciona aqui");
    console.log(favoritos);
  }, [favoritos]);

  //Função que remoe dos favoritos - DA LOCAL Storage e do estado ao mesmo tempo
  const removeFromFavorites = async (movieID) => {
    const newFavoritos = favoritos.filter(movie => movie.id !== movieID)
    await localStorage.setItem("my_favorites", JSON.stringify(newFavoritos))
    setFavoritos(newFavoritos);
  }

  return (
    <>
      <h1 style={{ margin: "100px", color: "white" }}>
        Favorites
      </h1>
      {/* Mapear os favoritos que recebemoszz */}
      {favoritos.map((movie) => {
        return <div><h2 className="movie-name-color">{movie.name}</h2> <button className="remove-fav" onClick={() => { removeFromFavorites(movie.id)}}>Remover</button></div>
    } ) }
    </>
  );
};

export default Favorites;
