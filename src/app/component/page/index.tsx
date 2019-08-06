import React, { ReactNode } from 'react';
//local
import Header from '../header';

type OwnsProps = {
  id: string;
  title: string;
  children?: ReactNode;
};

const Page: React.FC<OwnsProps> = (props: OwnsProps) => {
  return (
    <div id={props.id} className="page">
      <Header title={props.title} />
      {props.children}
    </div>
  );
};

export default Page;
