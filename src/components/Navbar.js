import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
/* import MenuNav from './MenuNav'; */
import AppImage from '../images/icon2.png';

import "../styles/NavBar.scss";

const NavBar = () => {
  const dropdownRef = useRef(null);
  const [isWideWidth, setWideWidth] = useState(window.innerWidth < 768);
  const [isActive, setIsActive] = useState(false);
 
  useEffect(() => {
    window.addEventListener("resize", updateMenu);
    return () => window.removeEventListener("resize", updateMenu);
  });

  const updateMenu = () => {
      setWideWidth(window.innerWidth < 768);
  }

 const onClick = () => {
   console.log('made it to isWideWidth, isActive', isWideWidth, isActive);
    setIsActive(!isActive);
    if (!isActive) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = "unset";
    }
    
  }

    return (
      <div className="nav nav__container">
        <Link to="/" className="nav__image-container">
          <img src={AppImage} className="nav__image" alt="home page" />
        </Link>
        {isWideWidth ? (
          <div>
            <div onClick={onClick} className="menu__hamburger-container">
              <div className="menu__hamburger">
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>
          </div>
        ) : (
          <div>
            <nav>
              <ul className="menu__horizontal">
                <li>
                  <Link to="/" className="menu__item">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="menu__item">
                    About
                  </Link>
                </li>
                <li>
                  <a
                    href="mailto:missymaloney1@gmail.com"
                    className="menu__item"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        )}
        <nav
          ref={dropdownRef}
          className={`menu__overlay ${isActive ? "active" : "inactive"} ${
            isWideWidth ? "notwidewidth" : "widewidth"
          }`}
        >
          <ul className="menu__overlay-container">
            <li className="menu__overlay-item">
              <Link to="/" onClick={onClick} className="menu-item">
                Home
              </Link>
            </li>
            <li className="menu__overlay-item">
              <Link to="/about" onClick={onClick} className="menu__item">
                About
              </Link>
            </li>
            <li className="menu__overlay-item">
              <a
                href="mailto:missymaloney1@gmail.com"
                onClick={onClick}
                className="menu__item"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    );
}

export default NavBar;