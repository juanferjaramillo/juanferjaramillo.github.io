import React from "react";
import style from "./navbuttons.module.css";
import { Link } from "react-router-dom";

function NavButtons() {
  return (
    <div className={style.contenedor}>
      <button className={style.navBut}>
        <Link to="/Home" className={style.link}>Home</Link>
      </button>
      <button className={style.navBut}>
        <Link to="/about" className={style.link}>About</Link>
      </button>
    </div>
  );
}
export default NavButtons;
