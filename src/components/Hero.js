import React from 'react';

import missyImg from '../images/missy__img.png';

const Hero = () => {
    return (
        <div className="hero">
            <div className="container">
            <img className="img__primary" src={missyImg} alt="Missy Maloney" />
            <div className="define">
                I am a <span className="bold highlight">Web Developer</span> based in
                Rockville, Maryland. I love to watch ideas come to life with digital
                tools.{" "} <span className="bold highlight"> It's truly <em>magic</em></span>.
            </div>
            <div className="define">
                People might describe me as a <em>marketing</em> or <em>art</em>{" "}
                person but I gravitate toward <span className="bold">technology</span>. I
                think that makes me{" "} <em><span className="bold highlight">versatile</span></em>. 
                I can see through the eyes of the client but can also implement the project.
            </div>
            <div className="define">
                Feel free to contact me or browse some of my projects using the links below.
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