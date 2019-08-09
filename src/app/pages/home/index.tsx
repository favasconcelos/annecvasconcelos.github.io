import React from 'react';
import { RouteComponentProps } from '@reach/router';
//local
import './home.scss';
import PageComponent from 'app/component/page';
import GalleryComponent from 'app/component/gallery';

interface OwnsProps extends RouteComponentProps { }

const HomePage: React.FC<OwnsProps> = () => {
  return (
    <PageComponent id="home" title="Home">
      <div className="section idea">
        <h3>Make your house creative and unique</h3>
        <p>
          Erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure
          dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit
          praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.
        </p>
      </div>
      <GalleryComponent />
    </PageComponent>
  );
};

export default HomePage;
