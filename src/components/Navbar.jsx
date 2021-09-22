import React, { useContext } from "react";
import FavoriteContext from "../contexts/favoritesContext";

const Navbar = () => {
  const { favoritePokemons } = useContext(FavoriteContext);

  console.log(favoritePokemons);
  let imgUrl =
    "https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png";

  return (
    <nav>
      <div />
      <div>
        <img src={imgUrl} alt="pekeapi-logo" className="navbar-image" />
      </div>
      <div>🤍{100} </div>
    </nav>
  );
};

export default Navbar;
