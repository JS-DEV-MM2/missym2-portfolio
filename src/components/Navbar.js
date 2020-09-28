import React from 'react';
import { Link } from 'react-router-dom';
import MenuNav from './MenuNav';
import AppImage from '../images/icon2.png';

import "../styles/NavBar.scss";

const NavBar = () => {
    return (
      <div className="nav nav__container">
        <div className="nav__image-container">
          <Link to="/">
            <img src={AppImage} className="nav__image" alt="home page" />
          </Link>
        </div>
        <MenuNav />
      </div>
    );    
}

export default NavBar;