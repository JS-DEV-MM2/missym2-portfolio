import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import "../styles/MenuNav.scss";

const MenuNav = () => {
    const [isWideWidth, setWideWidth] = useState(window.innerWidth < 800);

    const updateMenu = () => {
        console.log('made it to update Menu');
        setWideWidth(window.innerWidth < 800);
    }

    useEffect(() => {
        window.addEventListener("resize", updateMenu);
        return () => window.removeEventListener("resize", updateMenu);
    });

  return (
    <div className="menu">
      {isWideWidth ? (
        <div className="menu__hamburger-container">
          <span className="menu__hamburger">
            <span></span>
            <span></span>
            <span></span>
          </span>
          <span className="text">Menu</span>
        </div>
      ) : (
        <div className="menu__list-container">
          <div>
            <Link to="/" className="menu__item">
              Home
            </Link>
          </div>
          <div>
            <Link to="/about" className="menu__item">
              About
            </Link>
          </div>
          <div>
            <a href="mailto:missymaloney1@gmail.com" className="menu__item">
              Contact
            </a>
          </div>
        </div>
      )}

      <div className="fly-in--nav--social">
        <a href="https://www.facebook.com/" title="Facebook Link">
          <i className="fab fa-facebook-square"></i>
        </a>
        <a href="https://www.twitter.com/" title="Twitter Link">
          <i className="fab fa-twitter"></i>
        </a>
      </div>
    </div>
  );
};

export default MenuNav;
