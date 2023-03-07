import Card from "../card/Card";
import style from "./cards.module.css";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { connect, useSelector } from "react-redux";

// va a recibir un arreglo de personajes (con todos sus datos), y va a utilizar un componente Card (reutilizando el mismo que ya hicimos en el punto anterior) por cada uno de ellos, pasándole las props correspondientes.

function Cards({ characters, onClose, updateDetail, logedin }) {
  //characters =[ {name:'Rick',gender...}, {name:'Rick',gender...}, ---- ]

  const charsOnTable = useSelector((stateG) => stateG.charsOnTable);
  //trae todos los caracteres del stateG

  const navigate = useNavigate();

  // useEffect(() => (logedin ? console.log('acceso OK') : navigate("/")), [characters]);
  useEffect(
    () => (logedin ? console.log("acceso OK") : navigate("/")),
    [charsOnTable]
  );

  return (
    <div className={style.CardsCl}>
      {charsOnTable.map(({ name, species, gender, image, id }) => {
        return (
          <Card
            key={id}
            id={id} //identificador unico del tag
            name={name}
            species={species}
            gender={gender}
            image={image}
            onClose={onClose}
            updateIdDetail={updateDetail}
          />
        );
      })}
    </div>
  );
}

export const mapStateToProps = (stateG) => {
  //trae el estado global al estado local del componente
  return {
    logedin: stateG.logedin,
  };
};

// export default Cards;
export default connect(
  mapStateToProps, //arma un objeto de lo que obtiene del global state y lo alimenta a props de su mismo componente
  null //adiciona la funcion dispatch que obtiene del global state que recibe a los props
)(Cards);
