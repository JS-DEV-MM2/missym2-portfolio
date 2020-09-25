import React, { useContext  } from 'react';
import { ProjectViewerContext } from '../context/ProjectViewerContext';
import ProjectCard from './ProjectCard';

const ProjectList = () => {
    const { projects } = useContext(ProjectViewerContext);

    console.log('inside ProjectList, projects', projects);
    return (
            <div className="projects">
                <div className="container">
                    <h2>Projects</h2>
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