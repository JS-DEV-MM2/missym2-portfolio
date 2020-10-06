import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
/* import MenuNav from './MenuNav'; */
import oneFlower from '../images/one-flower.svg';
import twoFlowers from "../images/two-flowers.svg";

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
      if (window.innerWidth >= 768) {
        setIsActive(false);
        document.body.style.overflow = "unset";
      }
  }

 const onClick = () => {
    setIsActive(!isActive);
    if (!isActive) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = "unset";
    }
    
  }

    return (
      <div className={`nav nav__container ${isActive ? "open-nav" : ""}`}>
        <Link to="/" className="nav__image-container">
          <img src={oneFlower} className="nav__image" alt="home page" />
        </Link>
        {isWideWidth ? (
          <div onClick={onClick} className="nav-toggle">
            <div className="open-trigger">
              <span className="hamburger">
                <span></span>
                <span></span>
                <span></span>
              </span>
              <span className="text">Menu</span>
            </div>
            <span className="close-trigger">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="27.07"
                height="27.07"
                viewBox="0 0 27.07 27.07"
              >
                <polygon points="27.07 1.27 25.8 0 13.54 12.26 1.27 0 0 1.27 12.26 13.54 0 25.8 1.27 27.07 13.54 14.81 25.8 27.07 27.07 25.8 14.81 13.54 27.07 1.27"></polygon>
              </svg>
            </span>
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
        <section className="menu__overlay">
          <nav
            ref={dropdownRef}
           /*  className={`menu__overlay--nav ${isActive ? "active" : "inactive"} ${
              isWideWidth ? "notwidewidth" : "widewidth" */
            className="menu__overlay--nav"
          >
            {/* <div className="menu__overlay--nav"> */}
              <div>
                <Link to="/" onClick={onClick} className="menu-item">
                  Home
                </Link>
              </div>
              <div>
                <Link to="/about" onClick={onClick} className="menu__item">
                  About
                </Link>
              </div>
              <div>
                <a
                  href="mailto:missymaloney1@gmail.com"
                  onClick={onClick}
                  className="menu__item"
                >
                  Contact
                </a>
              </div>
              <div>
                <img src={twoFlowers} className="flower" alt="flower" />
              </div>
           {/*  </div> */}
          </nav>
        </section>
      </div>
    );
}

export default NavBar;