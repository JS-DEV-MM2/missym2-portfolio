import React, { useState } from 'react';

import "../styles/ProjectCard.scss";


const ReportDetail = props => {
  const [itemlistvisible, setitemlistvisible] = useState(false);
 
  const showHideItemList = () => {
    setitemlistvisible(!itemlistvisible);
  }

/* console.log("what are the props", props); */
  return (
      <div className="card__detail-section">
              {props.reports.length ? (
                <div className="card__detail-list-container">
                  <div className="btn__border-radius btn-light" onClick={showHideItemList}>{props.title}</div>
                    <div>
                        {itemlistvisible ? (
                          <ul>
                          {props.reports.map((item, i) => {
                            return (
                              <li key={item.id} className="card__item">
                                <a 
                                  href={item.artifactLink} 
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  >
                                  {item.name}
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

  export default ReportDetail;
