import React from 'react';
// local
import './gallery.scss';
import { GalleryOptions } from './type';

console.log(Object.values(GalleryOptions));

const GalleryComponent: React.FC = () => {
  return (
    <div id="gallery">
      <ul className="options">
        {Object.values(GalleryOptions).map(value => (
          <li>{value}</li>
        ))}
      </ul>
    </div>
  );
};

export default GalleryComponent;
