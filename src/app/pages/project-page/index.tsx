import React from 'react';
import { RouteComponentProps } from '@reach/router';
//local
import Page from '../../component/page';
import ProjectView from '../../component/project-view';
import { getProjectByID } from '../../services/projects';

interface OwnsProps extends RouteComponentProps {
  projectID?: string;
}

const ProjectPage: React.FC<OwnsProps> = props => {
  const project = getProjectByID(props.projectID);

  if (!project) {
    return null;
  }

  const pageTitle = `${project.title} (${project.year})`;
  return (
    <Page title={pageTitle}>
      <ProjectView data={project} />
    </Page>
  );
};

export default ProjectPage;
