import style from "./searchbar.module.css";
import React, { useEffect } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addCharToTable, clearTable } from "../../redux/actions";

function SearchBar(props) {
  //props === { onSearch: }
  //recibe por props una función onSearch, dicha función recibe un parámetro (que más adelante será el ID del personaje tomado desde el input

  const [char, setChar] = React.useState({
    charAddId: 0,
    inputTxt: "",
  });

  //adiciona el personaje al tablero:
  const handleInput = (evento) => {
    if (evento.target.value < 827) {
      setChar({
        ...char,
        charAddId: evento.target.value,
        inputTxt: evento.target.value,
      });

      //cambia el estado cada vez que el usuario ingresa un caracter
      //no cambia el dom porque no hay nada nuevo que renderizar
    } else {
      alert("😲 Ese personaje no existe! 😲");
      //informa al usuario inmediatamente ingresa un valor prohibido
    }
  };

  const charsOnTable = useSelector((stateG) => stateG.charsOnTable);
  //trae los id de los charsOnTable del stateG
  // console.log(charsOnTable);

  const dispatch = useDispatch();
  const handleAddClick = () => {
    //verifica si el id ingresado ya existe
    let exist = false;
    charsOnTable.forEach((elem) => {
      if (elem.id.toString() === char.charAddId) {
        //console.log('iguales');
        //console.log(toString(elem.id));
        //console.log(char.charAddId);
        exist = true;
      }else{
        //console.log(elem.id);
        //console.log(char.charAddId);
        //console.log('diferentes');
      }
    });

    if (exist) {
      alert("😲 Ese personaje ya lo tienes! 😲");
    } else {
      //dispatch(addCharToTable(char.charAddId));
      //lo adiciona al estado global
      props.onSearch(char.charAddId);
      //borra la caja de texto de busqueda:
      setChar({ ...char, inputTxt: "" });
    }
  };

  const handleRandomClick = (id) => {
    // let exist = false;
    // charsOnTable.forEach((elem) => {
    //   if (elem===id) exist = true})

    // while (exist) {
    //   id++;
    //   exist = false;
    //   charsOnTable.forEach((elem) => {
    //     if (elem===id) exist = true})
    // }
    // if (id > 826) {alert('Intenta de nuevo')}
    // else {
    setChar({
      ...char,
      charAddId: id,
      inputTxt: "",
    });
    props.onSearch(id);
  };

  const handleClean = () => {
    dispatch(clearTable());
    props.clearCards(); //borra cards del estado local en App
  };

  return (
    <>
      <div className={style.searchCl}>
        <div className={style.contSearch}>
          <input
            className={style.searchBox}
            placeholder="ID del personaje"
            type="search"
            onChange={handleInput}
            value={char.inputTxt}
          />

          <button
            className={`${style.boton}`}
            // onClick={()=> props.onSearch(Math.round(826*Math.random()))} >
            onClick={() => handleRandomClick(Math.round(826 * Math.random()))}
          >
            I feel lucky
          </button>
        </div>

        <div className={style.searchBut}>
          <button className={style.boton} onClick={handleAddClick}>
            Add Card
          </button>

          <button className={style.boton} onClick={handleClean}>
            Clear the table!
          </button>

          <button className={style.boton}>
            <Link to="/favorites/" className={style.link}>
              My Favorites
            </Link>
          </button>
        </div>
      </div>
    </>
  );
}

export default SearchBar;
