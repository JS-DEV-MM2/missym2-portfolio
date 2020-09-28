import React from 'react';

import "../styles/TechBlock.scss";


const TechBlock = props => {

    const tech = props.techitems.map( item => {
            return (
              <div className="tech__container" key={item.name}>
                <img className="tech__item" src={item.link} alt={item.name} />
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
