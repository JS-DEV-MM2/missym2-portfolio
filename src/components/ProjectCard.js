import React from 'react';
import { Link } from 'react-router-dom';

import ItemList from './ItemList';
import TechBlock from './TechBlock';

import "../styles/ProjectCard.scss";


const ProjectCard = props => {

    return (
      <div className="card">
        <div className="card__image-container">
          <img className="card__image" src={props.image} alt={props.imageAlt} />
        </div>
        <div className="card__info">
          <TechBlock techitems={props.tech} key={props.id} />
          <div className="card__title">
            <Link to={`/${props.id}`}>
              <p>{props.title}</p>
            </Link>
          </div>
          <div className="card__overview-section">
            <p>{props.overview}</p>
            <p>{props.content}</p>
            <p className="card__type">{props.type}</p>
            <div className="card__detail-section">
              <ItemList
                itemlist={props.reports}
                key={props.id}
                title="Reports"
                itemtype="reports"
              />
              <ItemList
                itemlist={props.artifacts}
                title="Artifacts"
                itemtype="artifacts"
              />
            </div>
          </div>
        </div>
      </div>
    );
}

export default ProjectCard;