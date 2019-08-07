import React, { useCallback } from 'react';
import uuid from 'uuid';
import { RouteComponentProps, navigate } from '@reach/router';
//local
import './homepage.scss';
import PageComponent from '../../component/page';
import CardComponent from '../../component/card';
import { PROJECTS, getProjectURL } from '../../services/projects';

interface OwnsProps extends RouteComponentProps {}

const HomePage: React.FC<OwnsProps> = () => {
  const onClick = useCallback(title => {
    navigate(`project/${getProjectURL(title)}`);
  }, []);

  return (
    <PageComponent title="Home">
      <div id="projects">
        {PROJECTS.map(({ title, image }) => (
          <CardComponent key={uuid.v4()} img={image} title={title} onClick={() => onClick(title)} />
        ))}
      </div>
    </PageComponent>
  );
};

export default HomePage;
