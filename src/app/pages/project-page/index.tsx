import React from 'react';
import { match } from 'react-router-dom';
//local
import Page from '../../component/page';

interface Params {
  id: string;
}

type OwnsProps = {
  match?: match<Params>;
};

const ProjectPage: React.FC<OwnsProps> = props => {
  return (
    <Page id="project" title="Project">
      <pre>{JSON.stringify(props, null, 2)}</pre>
    </Page>
  );
};

export default ProjectPage;
