import React from 'react';

import '../styles/Hero.scss';

import missyImg from '../images/missy__img.png';

const Hero = () => {
    return (
      <div className="hero">
        <div className="container">
          <div className="hero__image-container">
            <img className="hero__image" src={missyImg} alt="Missy Maloney" />
          </div>
          <div className="hero__content">
            <p>
              I am a Web Developer based in Rockville, Maryland. I love to watch
              ideas come to life with digital tools. It's truly magic.
            </p>
            <p>
              People might describe me as a marketing or art person but I
              gravitate toward technology. I think that makes me versatile. I
              can see through the eyes of the client but can also implement the
              project.
            </p>
            <p>
              Feel free to contact me or browse some of my projects using the
              links below.
            </p>
          </div>
          <div className="home-links">
            <a href="mailto:missymaloney1@gmail.com">
              <button type="button" className="btn-dark">
                Email me
              </button>
            </a>
          </div>
        </div>
      </div>
    );
}

export default Hero;