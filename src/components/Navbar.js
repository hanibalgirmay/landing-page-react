import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { MdFingerprint } from "react-icons/md";
import { FaBars, FaTimes } from "react-icons/fa";
import { Button } from "./Button";
import "./Navbar.css";
import { IconContext } from "react-icons/lib";

function Navbar() {
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
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <IconContext.Provider value={{ color: "#FFF" }}>
        <div className="navbar">
          <div className="navbar-container container">
            <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
              <MdFingerprint className="navbar-icon" />
              Website
            </Link>
            <div onClick={handleClick} className="menu-icon">
              {click ? <FaTimes /> : <FaBars />}
            </div>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li className="nav-item">
                <Link onClick={closeMobileMenu} to="/" className="nav-links">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  onClick={closeMobileMenu}
                  to="/service"
                  className="nav-links"
                >
                  Services
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  onClick={closeMobileMenu}
                  to="/product"
                  className="nav-links"
                >
                  Products
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  onClick={closeMobileMenu}
                  to="/about"
                  className="nav-links"
                >
                  About
                </Link>
              </li>
              <li className="nav-btn">
                {button ? (
                  <Link to="/sign-in" className="btn-link">
                    <Button buttonStyle="btn--outline">Sign Up</Button>
                  </Link>
                ) : (
                  <Link
                    onClick={closeMobileMenu}
                    to="/sign-up"
                    className="btn-link"
                  >
                    <Button buttonStyle="btn--outline" buttonSize="btn--mobile">
                      Sign Up
                    </Button>
                  </Link>
                )}
              </li>
            </ul>
          </div>
        </div>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
