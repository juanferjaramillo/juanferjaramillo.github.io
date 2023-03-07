import style from "./logo.module.css";

function Logo() {
  return (
    <>
      <img className={style.logo} 
      // src='https://assets.stickpng.com/images/58f37720a4fa116215a9240f.png'
      src ='https://1000marcas.net/wp-content/uploads/2022/04/Rick-and-Morty.png'
      alt='Logo'></img>;
    </>
  );
}
export default Logo;
