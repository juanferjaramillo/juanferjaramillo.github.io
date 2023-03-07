import React from "react";
import style from "./splash.module.css";

class Splash extends React.Component {
  render() {
    return (
      <div >
        <img className={style.img}
          src={
            "https://www.rollingstone.com/wp-content/uploads/2022/08/22-RAM-S6-KEY-ART-1080x1080-1-e1661990077221.png"
          }
          alt={`Rick and Morty's Show`}
        ></img>
      </div>
    );
  }
}
export default Splash;
