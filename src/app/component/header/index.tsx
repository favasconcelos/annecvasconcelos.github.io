import React from 'react';
// local
import './header.scss';
import logoTransparent from '_assets/logo_transparent.png';

interface OwnsProps {
  title: string;
}

const HeaderComponent: React.FC<OwnsProps> = ({ title }) => {
  return (
    <div className="header">
      <div className="header-menu fixed">
        <img className="logo" src={logoTransparent} />
        <div>...</div>
      </div>
    </div>
  );
};

export default HeaderComponent;
