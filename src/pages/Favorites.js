import { useEffect, useState } from "react";

const Favorites = () => {
  const [favoritos, setFavoritos] = useState([]);

  //Use effect que corre no inicio da nossa aplicação para configurar os favoritos
  useEffect(() => {
    console.log("Funciona aqui");

    const getFav = async () => {
        const localFavo = await JSON.parse(localStorage.getItem("my_favorites"))
        setFavoritos(localFavo)
    }
    
    getFav()
    
  }, []);

  // Use effect que corre quando os favoritos são modificados
  useEffect(() => {
    console.log("Funciona aqui");
    console.log(favoritos);
  }, [favoritos]);

  return (
    <>
      <h1 style={{ margin: "100px", color: "white" }}>
        Favorites
      </h1>
      {/* Mapear os favoritos que recebemoszz */}
      {favoritos.map((movie) => {
        return <h2>{movie.title}</h2>
    } ) }
    </>
  );
};

export default Favorites;
