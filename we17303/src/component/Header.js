import Nav from "./Nav";
import style from './Header.module.css';
const Header = () => {
  return `<header class="${style.bg} ">
    ${Nav()}
  </header>`;
}
export default Header;