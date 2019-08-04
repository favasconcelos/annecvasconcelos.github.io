import React from 'react';
//local
import './card.scss';
import imgGallery from '../../../_assets/gallery.jpg';

type OwnProps = {};

const Card: React.FC = (props: OwnProps) => {
  return (
    <div className="card">
      <img src={imgGallery} alt="lala" />
      <p className="desc">Recusandae optio nostrum quod.</p>
    </div>
  );
};

export default Card;
