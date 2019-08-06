import React from 'react';
//local
import './project.scss';
import { Project } from './type';

type OwnsProps = {
  data: Project;
};

const ProjectView: React.FC<OwnsProps> = props => {
  const project = props.data;
  return (
    <div id="project">
      <div id="images">
        <img src={project.mainImage} alt={project.title} />
      </div>
      <div id="description">
        <p>{project.description}</p>

        <p className="title">Date:</p>
        <p>May 13, 2017</p>

        {project.tags && (
          <>
            <p className="title">Tags:</p>
            <p className="tags">
              {project.tags.map(tag => (
                <span key={tag}>{tag}</span>
              ))}
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default ProjectView;
