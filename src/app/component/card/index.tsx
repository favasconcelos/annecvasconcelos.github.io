import React from 'react';
//local
import './card.scss';

type OwnsProps = {
  img: string;
  title: string;
  onClick: Function;
};

const CardComponent: React.FC<OwnsProps> = ({ img, title, onClick }) => {
  return (
    <div className="card" onClick={() => onClick()}>
      <img src={img} alt={title} />
      <p>{title}</p>
    </div>
  );
};

export default CardComponent;
