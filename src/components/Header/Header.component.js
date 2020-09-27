import React from "react";
import "./Header.styles.scss";
import BurgerNav from "../BurgerNav/BurgerNav.component";

function Header() {
  return (
    <header className="header-title">
      <BurgerNav />
      <h1>Website todo</h1>
    </header>
  );
}

export default Header;
