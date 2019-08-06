import React, { useCallback } from 'react';
import { RouteComponentProps, navigate } from '@reach/router';
//local
import './home-page.scss';
import Page from '../../component/page';
import Card from '../../component/card';
import { Project } from '../../component/project-view/type';
import { PROJECTS, getProjectURL } from '../../services/projects';

interface OwnsProps extends RouteComponentProps {}

const HomePage: React.FC<OwnsProps> = () => {
  const onClick = useCallback(title => {
    navigate(`project/${getProjectURL(title)}`);
  }, []);

  return (
    <Page title="Home">
      <div id="projects">
        {PROJECTS.map((project: Project) => (
          <Card key={project.title} img={project.mainImage} title={project.title} onClick={() => onClick(project.title)} />
        ))}
      </div>
    </Page>
  );
};

export default HomePage;
