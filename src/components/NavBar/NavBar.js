import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "../Button/Button";
import "./NavBar.css";
import NavBarItem from "./NavBarItem";

function NavBar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton(); //Fix Bug on Sign Up Button
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <div>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            TRVL <i className="fab fa-typo3"></i>
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <NavBarItem
              title="Home"
              to="/"
              className="nav-links"
              onClick={closeMobileMenu}
            />
            <NavBarItem
              title="Services"
              to="/services"
              className="nav-links"
              onClick={closeMobileMenu}
            />
            <NavBarItem
              title="Products"
              to="/products"
              className="nav-links"
              onClick={closeMobileMenu}
            />
            <NavBarItem
              title="Sign Up"
              to="/sign-up"
              className="nav-links-mobile"
              onClick={closeMobileMenu}
            />
          </ul>
          {button && <Button buttonStyle="btn--outline">SIGN UP</Button>}
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
