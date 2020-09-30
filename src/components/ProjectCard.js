import React from 'react';

import ItemList from './ItemList';
import TechBlock from './TechBlock';

import "../styles/ProjectCard.scss";


const ProjectCard = props => {
    return (
      <div className={`card ${props.style}`}>
        <div className="card__title">
          <p>{props.title}</p>
        </div>
        <p className="card__type">a {props.type} project</p>
        <div className="card__overview">
          <p>{props.overview}</p>
        </div>
        <div className="card__info">
          {props.title === "Dinner's On" ? (
            <div></div>
          ) : (
            <div className="btn__container">
              <a
                className="card__links-action"
                href={props.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <button type="button" className="btn btn__light">
                  View code
                </button>
              </a>
              <a
                className="card__links-action"
                href={props.project}
                target="_blank"
                rel="noopener noreferrer"
              >
                <button type="button" className="btn btn__dark">
                  View project
                </button>
              </a>
            </div>
          )}

          <TechBlock techitems={props.tech} key={props.id} />
          <div className="card__content">
            <p>{props.content}</p>
          </div>
          <div className="card__detail-section">
            {props.reports.length > 0 && (
              <ItemList
                itemlist={props.reports}
                key={props.id}
                title="Reports"
                itemtype="reports"
              />
            )}

            {props.artifacts.length > 0 && (
              <ItemList
                itemlist={props.artifacts}
                title="Artifacts"
                itemtype="artifacts"
              />
            )}
          </div>
        </div>
        <div className="card__image-container">
          <img
            className='card__image'
            src={props.image}
            alt={props.imageAlt}
          />
        </div>
      </div>
    );
}

export default ProjectCard;