import React from 'react';
//local
import './project.scss';
import { Project } from './type';

type OwnProps = {
  data: Project;
};

const ProjectView: React.FC<OwnProps> = (props: OwnProps) => {
  return <div id="project">{JSON.stringify(props)}</div>;
};

export default ProjectView;
