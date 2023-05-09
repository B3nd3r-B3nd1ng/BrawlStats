import "../styles/NavBar.scss";
import Logo from "../assets/casque-viking.png";
import { useState } from "react";

const NavBar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const handleShowLinks = () => {
    setShowLinks(!showLinks);
  };
  return (
    <nav className={`navBar ${showLinks ? "showMenu" : "hiddenMenu"}`}>
      <div>
        <img className="logo" src={Logo} alt="logo" />
      </div>
      <div></div>
      <ul className="BurgerLinks">
        <li>
          <a href="/" className="Burger_Link">
            Legends
          </a>
        </li>
        <li>
          <a href="/" className="Burger_Link">
            Stats
          </a>
        </li>
        <li>
          <a href="/" className="Burger_Link">
            News
          </a>
        </li>
        <li>
          <a href="/" className="Burger_Link">
            AboutUs
          </a>
        </li>
      </ul>
      <button type="button" className="BurgerButton" onClick={handleShowLinks}>
        <span className={showLinks ? "BurgerCross" : "Burger_Bar"} />
      </button>
    </nav>
  );
};

export default NavBar;
