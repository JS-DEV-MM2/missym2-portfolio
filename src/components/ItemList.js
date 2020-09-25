import React, { useState } from 'react';

import "../styles/ProjectCard.scss";


const ItemList = props => {
  const [itemlistvisible, setitemlistvisible] = useState(false);
 
  const showHideItemList = () => {
    setitemlistvisible(!itemlistvisible);
  }

  const artifacts = props.itemlist.map((item, i) => {
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
                          })

  return (
      <div className="card__detail-section">
            <div className="card__detail-list-container">
                <div className="card__detail-list-btn" onClick={showHideItemList}>{props.title}</div>
                <div>
                    {itemlistvisible ? (
                        <ul>
                        {artifacts}
                    </ul>
                    ) : (
                        <div></div>
                    )} 
                </div>
            </div>
       </div>
    );
  }

  export default ItemList;
