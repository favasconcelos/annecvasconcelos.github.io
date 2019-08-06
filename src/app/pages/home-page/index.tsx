import React from 'react';
//local
import Page from '../../component/page';
import ProjectList from '../../component/project-list';

const Home: React.FC = () => {
  return (
    <Page id="home" title="Home">
      <ProjectList />
    </Page>
  );
};

export default Home;
