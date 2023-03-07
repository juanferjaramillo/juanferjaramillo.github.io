import SearchBar from "../searchbar/SearchBar";
import Logo from "../logo/Logo.jsx";
import NavButtons from "../navbuttons/NavButtons";
import style from './navbar.module.css'

function NavBar({onSearch, clearCards}) {
  return (
    <div className={style.navBar}>
      <NavButtons />
      <Logo />
      <SearchBar
        onSearch={onSearch}
        clearCards={clearCards}
        // esto es lo que se quiere hacer cuando click en el boton
      />
    </div>
  );
}
export default NavBar;
