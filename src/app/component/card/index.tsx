import React from 'react';
//local
import './card.scss';

type OwnProps = {
  img: string;
  title: string;
};

const Card: React.FC<OwnProps> = (props: OwnProps) => {
  return (
    <div className="card">
      <img src={props.img} alt={props.title} />
      <p>{props.title}</p>
    </div>
  );
};

export default Card;
