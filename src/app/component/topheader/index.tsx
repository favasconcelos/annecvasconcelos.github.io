import React from 'react';
// local
import './topheader.scss';

const TopHeaderComponent: React.FC = () => {
  return (
    <div id="top-header">
      <div id="top-header-wrapper">
        <div>FAQ | Contact | +34 12345678</div>
        <div>MON - FRI: 08:00 - 05:00 PM</div>
      </div>
    </div>
  );
};

export default TopHeaderComponent;
