import React from 'react';
// local
import './header.scss';

interface OwnsProps {
  title: string;
}

const HeaderComponent: React.FC<OwnsProps> = ({ title }) => {
  return (
    <div id="header">
      <h1>{title}</h1>
    </div>
  );
};

export default HeaderComponent;
