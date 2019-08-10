import React, { useRef, useState } from 'react';
// local
import './header.scss';
import logoTransparent from '_assets/logo_transparent.png';
import useScroll from './useScroll';

interface OwnsProps {
  title: string;
}

const HeaderComponent: React.FC<OwnsProps> = ({ title }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [fixed, setFixed] = useState(false);
  useScroll(() => {
    const headerMenu = ref.current;
    if (headerMenu && headerMenu.offsetTop) {
      setFixed(true);
    } else {
      setFixed(false);
    }
  });
  const className = ['header-menu', fixed ? 'fixed' : ''].join(' ');
  return (
    <div className="header">
      <div ref={ref} className={className}>
        <img className="logo" src={logoTransparent} alt="logo" />
        <div>...</div>
      </div>
    </div>
  );
};

export default HeaderComponent;
