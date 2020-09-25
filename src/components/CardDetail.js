import React, { useState } from 'react';

import "../styles/ProjectCard.scss";


const CardDetail = props => {
  const [itemlistvisible, setitemlistvisible] = useState(false);
 
  const showHideItemList = () => {
    setitemlistvisible(!itemlistvisible);
  }

console.log("what are the props", props);
  return (
      <div className="card__detail-section">
              {props.reports.length ? (
                <div className="card__detail-list-container">
                  <div className="card__detail-list-btn" onClick={showHideItemList}>{props.title}</div>
                    <div>
                        {itemlistvisible ? (
                          <ul>
                          {props.reports.map((report, i) => {
                            return (
                              <li key={report.id} className="card__item">
                                <a 
                                  href={report.artifactLink} 
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  >
                                  {report.name}
                                </a>
                              </li>
                            );
                          })}
                        </ul>
                        ) : (
                          <div></div>
                        )} 
                    </div>
                </div>
              ) : (
                <div></div>
              )}
      </div>
    );
  }

  export default CardDetail;
