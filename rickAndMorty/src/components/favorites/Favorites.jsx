import Card from "../card/Card";
import { useSelector } from "react-redux";
import style from "./favorites.module.css";
import { useState } from "react";

const URL_BASE = "https://be-a-rym.up.railway.app/api";
const URL_SEP1 = "/character/";
const URL_SEP2 = "?key=";
const API_KEY = "ff4167f2d3a5.29a3b285bc3fb414a23a";

function Favorites() {
  const myFavIds = useSelector((stateG) => stateG.myFavorites);
  // traer el array de id de los caracters favoritos

  return (
    <>
      <h1>Mis Favoritos</h1>
      <div className={style.divFav}>
        {myFavIds.map((g) => (
          <Card
            key={g.id}
            id={g.id} //identificador unico del tag
            name={g.name}
            species={g.species}
            gender={g.gender}
            image={g.image}
            //onClose={char.onClose}
            //updateIdDetail={char.updateDetail}
          />
        ))}
      </div>
    </>
  );
}
export default Favorites;
