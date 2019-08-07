import React, { ReactNode } from 'react';
//local
import './page.scss';
import HeaderComponent from '../header';

interface OwnsProps {
  title: string;
  children?: ReactNode;
}

const PageComponent: React.FC<OwnsProps> = ({ title, children }) => {
  return (
    <div className="page">
      <HeaderComponent title={title} />
      <div id="body">{children}</div>
    </div>
  );
};

export default PageComponent;
