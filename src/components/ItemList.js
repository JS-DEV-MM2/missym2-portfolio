import React, { useState } from 'react';

import "../styles/ItemList.scss";


const ItemList = props => {
  const [itemlistvisible, setitemlistvisible] = useState(false);
 
  const showHideItemList = () => {
    setitemlistvisible(!itemlistvisible);
  }

  const artifacts = props.itemlist.map((item, i) => {
                            return (
                              <li key={item.id} className="itemlist__item">
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
    <div className="itemlist">
      <div className="itemlist__container">
        <div className="btn__container">
          <button
            type="button"
            className="btn btn__light-wide"
            onClick={showHideItemList}
          >
            {props.title}
          </button>
        </div>
        <div>{itemlistvisible && <ul className="artifact__container">{artifacts}</ul>}</div>
      </div>
    </div>
  );
  }

  export default ItemList;
