import React from 'react';
// local
import './image.scss';
import { Image } from '../project/type';

interface OwnsProps {
  image: Image;
}

const ImageComponent: React.FC<OwnsProps> = ({ image }) => {
  return (
    <div className="image">
      <img src={image.src} alt={image.label || 'Imagem meramente ilustrativa.'} />
      {image.label && <span>{image.label}</span>}
    </div>
  );
};

export default ImageComponent;
