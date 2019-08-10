import React from 'react';
// local
import './footer.scss';

const FooterComponent: React.FC = () => {
  return (
    <div id="footer">
      <div className="item">Anne C Vasconcelos</div>
      <div className="item">
        <h3>Address</h3>
        <p>Zaragoza, ES</p>
      </div>
      <div className="item">
        <h3>Contact</h3>
        <p>
          anne...@gmail.com
          <br />
          +34 12341234
        </p>
      </div>
      <div className="item">
        <h3>Social</h3>
      </div>
    </div>
  );
};

export default FooterComponent;
