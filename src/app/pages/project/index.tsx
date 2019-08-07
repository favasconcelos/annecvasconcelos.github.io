import React from 'react';
import { RouteComponentProps } from '@reach/router';
//local
import PageComponent from '../../component/page';
import ProjectComponent from '../../component/project';
import { getProjectByID } from '../../services/projects';

interface OwnsProps extends RouteComponentProps {
  projectID?: string;
}

const ProjectPage: React.FC<OwnsProps> = ({ projectID }) => {
  const project = getProjectByID(projectID);

  if (!project) {
    return null;
  }

  const title = `${project.title} (${project.year})`;
  return (
    <PageComponent title={title}>
      <ProjectComponent project={project} />
    </PageComponent>
  );
};

export default ProjectPage;
