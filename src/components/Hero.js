import React from 'react';

import '../styles/Hero.scss';

import missyImg from '../images/missy__img.png';

const Hero = () => {

    return (
      <div className="hero hero__container">
        <div className="hero__content">
          <p>
            I'm Missy Maloney, a <bold className="hero__em">Web Developer and UX/UI Designer</bold> based in
            Rockville, Maryland. I love to watch ideas come to life with digital
            tools. It's truly <bold className="hero__em-plus">magic</bold>.
          </p>
        </div>
        <div className="hero__image-container">
          <div className="hero__color-block">
            <img className="hero__image" src={missyImg} alt="Missy Maloney" />
          </div>
        </div>
      </div>
    );
}

export default Hero;