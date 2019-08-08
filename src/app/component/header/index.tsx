import React from 'react';
// local
import './header.scss';
import logoTrans from '../../../_assets/logo_transparent.png';

interface OwnsProps {
  title: string;
}

const HeaderComponent: React.FC<OwnsProps> = ({ title }) => {
  return (
    <div className="header">
      <div className="header-menu fixed">
        <img className="logo" src={logoTrans} />
        <div>...</div>
      </div>
    </div>
  );
};

export default HeaderComponent;
