import React from 'react';
//local
import './card.scss';

type OwnsProps = {
  img: string;
  title: string;
  onClick: Function;
};

const Card: React.FC<OwnsProps> = props => {
  return (
    <div className="card" onClick={() => props.onClick()}>
      <img src={props.img} alt={props.title} />
      <p>{props.title}</p>
    </div>
  );
};

export default Card;
