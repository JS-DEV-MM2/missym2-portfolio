import React from 'react';

import aboutImg from "../images/missy__img.png";
import myResume from "../artifacts/missymaloneyresume10012020.pdf";

import '../styles/About.scss';


const About = () => {

    return (
      <div className="about__container">
        <div className="about__image-container">
          <div className="about__color-block">
            <img src={aboutImg} className="about__image" alt="family" />
          </div>
        </div>
        <div className="about__resume-btn">
          <a href={myResume} target="_blank" rel="noopener noreferrer">
            <button type="button" className="btn btn__light">
              View my resume
            </button>
          </a>
        </div>

        <div className="about__content">
          <p>
            People might describe me as a marketing or art person but I
            gravitate toward technology. I think that makes me versatile. I can
            see through the eyes of the client but can also implement the
            project.
          </p>
          <p>
            I am currently working as a Software Engineer at raft, LLC. There, I
            work on an agile team to develop digital applications to replace
            paper-based financial education tools. We have followed{" "}
            <em className="highlight">mobile-first</em> and{" "}
            <em className="highlight">progressive web</em> methodologies.
            Critical to our success is our user-centered approach, taking
            advantage of such techniques as the development of
            <em className="highlight">user personas</em>,{" "}
            <em className="highlight">wireframes</em>, and{" "}
            <em className="highlight">full-color clickable mockups</em>.
            Throughout the process, we have incorporated user feedback to
            produce software that really improves lives.
          </p>
          <p>
            I began my career in technical sales but quickly moved to database
            development. After time off to raise my children, I have graduated
            from an intensive{" "}
            <em className="highlight">Full-stack Web Development</em> bootcamp
            with Thinkful, Inc. Our stack included <span>HTML</span>,{" "}
            <span className="highlight">CSS</span>,{" "}
            <span className="highlight">Javascript</span>,{" "}
            <span className="highlight">React JS</span>,<span>Node JS,</span>{" "}
            <span className="highlight">MongoDB</span> and{" "}
            <span className="highlight">Git</span>. I have also completed
            multi-course specializations in <span>Agile Development</span>,{" "}
            <span className="highlight">UX/UI Design</span> and{" "}
            <span className="highlight">User Research and Design</span>. My most
            recent training has been in{" "}
            <span className="highlight">Progressive Web Apps</span>,{" "}
            <span className="highlight">Docker </span>
            and <span className="highlight">Kubernetes</span>.
          </p>
        </div>
      </div>
    );
}

export default About;