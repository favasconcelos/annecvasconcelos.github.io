import React from 'react';
//local
import './projects.scss';
import Card from '../card';
import { PROJECTS } from '../../services/projects';
import { Project } from '../project/type';

const ProjectList: React.FC = () => {
  return (
    <div id="projects">
      {PROJECTS.map((project: Project) => (
        <Card key={project.title} img={project.img} title={project.title} />
      ))}
    </div>
  );
};

export default ProjectList;
