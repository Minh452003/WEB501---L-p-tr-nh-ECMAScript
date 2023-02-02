import { menus } from "../data";
import style from "./Nav.module.css";
const Nav = () => {
  return `
    <nav class="${style.bg}">
    ${menus.map(menu => `<a href="${menu.link}">${menu.name}</a>`).join('')}
  </nav>`;
}
export default Nav;