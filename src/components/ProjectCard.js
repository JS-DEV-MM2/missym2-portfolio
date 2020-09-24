import React from 'react';
import { Link } from 'react-router-dom';


const ProjectCard = props => {

  console.log('what is props.reports', props.reports.length);
    return (
      <div className="card">
        <div>
          <img className="card-image" src={props.image} alt={props.imageAlt} />
        </div>
        <div className="card-info">
          <div className="card-title">
            <Link to={`/${props.id}`}>
              <p>{props.title}</p>
            </Link>
          </div>
          <div className="card-overview-section">
            <p>{props.overview}</p>
            <p>{props.type}</p>
            {
                props.reports.length ? (
                  <div className='artifact-list-container'>
                    <div>Reports</div>
                    <ul>
                        {
                            props.reports.map(( report, i ) => {
                                return (
                                    <li key={report.id}>{report.name}</li>
                                );
                            })
                        }
                    </ul>
                  </div>
                ) : (
                  <div>no reports</div>
                )

            }
            {
                props.artifacts.length ? (
                  <div>
                  <div>Artifacts</div>
                      <ul className='artifact-list-container'>
                          {
                              props.artifacts.map(( artifact, i ) => {
                                  return (
                                      <li key={artifact.id}>{artifact.name}</li>
                                  );
                              })
                          }
                      </ul>
                    </div>
                ) : (
                  <div>no artifacts to show</div>
                )
            }

          </div>
        </div>
      </div>
    );
}

export default ProjectCard;