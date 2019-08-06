import React, { ReactNode } from 'react';
//local
import './page.scss';
import Header from '../header';

interface OwnsProps {
  title: string;
  children?: ReactNode;
}

const Page: React.FC<OwnsProps> = props => {
  return (
    <div className="page">
      <Header title={props.title} />
      <div id="body">{props.children}</div>
    </div>
  );
};

export default Page;
