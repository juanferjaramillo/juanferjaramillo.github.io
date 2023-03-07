import React from "react";
import Cards from "../cards/Cards.jsx";
import Splash from "../splash/Splash.jsx";
import { useSelector } from "react-redux";

//characters = [ { id:1, name:'xx', species:'xx', gender:'xx' }, {},.. ]
//setea el estado inicial del array characters:

function Home({characters, onClose, updateDetail}) {
  const charsOnTable = useSelector(stateG => stateG.charsOnTable);
  return (
    <div>
      
      {charsOnTable.length === 0 ? <Splash /> : <Cards />} 
    </div>
  );
}
export default Home;
