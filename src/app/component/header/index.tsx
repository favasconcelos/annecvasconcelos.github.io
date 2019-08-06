import React from 'react';
// local
import './header.scss';

type OwnsProps = {
  title: string;
};

const Header: React.FC<OwnsProps> = (props: OwnsProps) => {
  return (
    <div id="header">
      <h1>{props.title}</h1>
    </div>
  );
};

export default Header;
