import React, { useContext  } from 'react';
import { ProjectViewerContext } from '../context/ProjectViewerContext';
import ProjectCard from './ProjectCard';

const ProjectList = () => {
    const { projects } = useContext(ProjectViewerContext);

    return (
         <div className="projects">
               <div className="container">
                    {
                        projects.length ? (
                            <div className="projects__grid-container">
                                {
                                    projects.map(( project, i ) => {
                                        return (
                                            <ProjectCard key={i} {...project} />
                                        );
                                    })
                                }
                            </div>
                        ) : (
                            <div>No projects can be found.</div>
                        )
                    } 
                </div> 
            </div>
    );
}

export default ProjectList;