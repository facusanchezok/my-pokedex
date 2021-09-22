import React, { useState } from "react";
import { searchPokemon } from "../api";

const Searchbar = () => {
  const [search, setSearch] = useState("");
  const [pokemon, setPokemon] = useState();

  const onChange = (e) => {
    // console.log(e.target.value);
    setSearch(e.target.value);
  };
  const onClick = async (e) => {
    const data = await searchPokemon(search);
    setPokemon(data);
  };
  return (
    <div className="searchbar-container">
      <div className="searchbar">
        <input placeholder="Buscar pokemon..." onChange={onChange} />
      </div>
      <div className="searchbar-btn">
        <button onClick={onClick}>Buscar</button>
      </div>
      <div></div>
    </div>
  );
};

export default Searchbar;
