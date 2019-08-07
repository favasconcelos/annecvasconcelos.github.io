import React from 'react';
import uuid from 'uuid';
//local
import './project.scss';
import { Project } from './type';
import ImagesComponent from '../images';

type OwnsProps = {
  project: Project;
};

const ProjectComponent: React.FC<OwnsProps> = ({ project }) => {
  return (
    <div id="project">
      <ImagesComponent sections={project.sections} />
      <div id="description">
        <p>{project.description}</p>
        <p className="title">Date:</p>
        <p>May 13, 2017</p>
        <p className="title">Document:</p>
        <p>
          <a href={project.document} target="_blank" rel="nofollow">
            Project PDF
          </a>
        </p>
        {project.tags && (
          <>
            <p className="title">Tags:</p>
            <p className="tags">
              {project.tags.map(tag => (
                <span key={uuid.v4()}>{tag}</span>
              ))}
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default ProjectComponent;
