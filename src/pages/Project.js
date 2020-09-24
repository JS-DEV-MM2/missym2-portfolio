import React, { useContext } from 'react';
import ProjectViewerContext from '../context/ProjectViewerContext';
/* import { useParams } from 'react-router-dom'; */

const Project = () => {
    const projectViewerContext = useContext(ProjectViewerContext);
  /*   const { getProjectById, currentProject } = projectViewerContext; */

/*     let { projectId } = useParams(); */

/*     useEffect(() => {
        getProjectById(projectId);
    }, []); */

    return (
        <div className="project">
            <div>project component is here</div>
           {/*  {
                currentProject ? (
                    <>
                        <div className="project-image"  
                                style={{
                                    width: '100%',
                                    height: '300px',
                                    backgroundImage: `url('${currentProject.image}')`,
                                    backgroundPosition: 'center',
                                    backgroundRepeat: 'no-repeat',
                                    backgroundSize: 'cover',
                                    position: 'relative',
                                    borderTopRightRadius: '2px',
                                    borderTopLeftRadius: '2px'
                                }}
                        ></div>
                        <div className='project-content'>
                            <h2>{currentProject.title}</h2>
                            <p>{currentProject.overview}</p>
                            <p>{currentProject.artifactList}</p>
                        </div>
                    </>
                ) : (
                    <p>Loading...</p>
                )} */}
        </div>
    )
}

export default Project;