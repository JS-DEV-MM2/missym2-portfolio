import React from 'react';

import '../styles/Hero.scss';

import homeImg from "../images/programmer_at_desk.png";

const Hero = () => {

    return (
      <div className="hero hero__container">
        <div className="hero__content">
          <p>
            I'm Missy Maloney, a <span className="hero__em">Web Developer and UX/UI Designer</span> based in
            Rockville, Maryland. I love to watch ideas come to life with digital
            tools. It's truly <span className="hero__em-plus">magic</span>.
          </p>
        </div>
        <div className="hero__image-container">
            <img className="hero__image" src={homeImg} alt="Missy Maloney" />
        </div>
      </div>
    );
}

export default Hero;