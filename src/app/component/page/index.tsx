import React, { ReactNode } from 'react';
//local
import './page.scss';
import TopHeaderComponent from 'app/component/topheader';
import HeaderComponent from 'app/component/header';

interface OwnsProps {
  id: string;
  title: string;
  children?: ReactNode;
}

const PageComponent: React.FC<OwnsProps> = ({ id, title, children }) => {
  return (
    <div id={id} className="page">
      <TopHeaderComponent />
      <HeaderComponent title={title} />
      <div id="body">{children}</div>
    </div>
  );
};

export default PageComponent;
