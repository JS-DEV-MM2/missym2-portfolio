import React from 'react';

import "../styles/TechBlock.scss";


const TechBlock = props => {

    const tech = props.techitems.map((item, i) => {
            return (
              <div className="tech__container">
                <img
                  className="tech__item"
                  src={item.link}
                  alt={item.name}
                />
                <div className="tech__item-name">
                    {item.name}
                </div>
              </div>
            );
    });
  
  return (
    <div className="tech">
        <ul>
          {tech}
        </ul>
    </div>
  );
}

  export default TechBlock;
