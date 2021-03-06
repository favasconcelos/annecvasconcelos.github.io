import React, { useState } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
// local
import './gallery.scss';
import { GalleryOptions } from 'app/services/type';
import { IMAGES, filterByOption } from 'app/services/gallery';

const GalleryComponent: React.FC = () => {
  const [option, setOption] = useState(GalleryOptions.ALL);
  const images = filterByOption(IMAGES, option);

  console.log(images);
  return (
    <div id="gallery">
      <ul className="options">
        {Object.values(GalleryOptions).map(value => {
          const key = `gallery-option-${value}`;
          const className = value === option ? 'active' : '';
          return (
            <li key={key} className={className} onClick={() => setOption(value)}>
              {value}
            </li>
          );
        })}
      </ul>
      <TransitionGroup component="div" className="images">
        {images.map(image => {
          const key = `gallery-item-${image.id}`;
          return (
            <CSSTransition key={key} timeout={500} classNames="fade">
              <div className="item">
                <img src={image.src} alt={image.title} />
                <div className="meta">
                  <h3>{image.title}</h3>
                  <p>{image.description}</p>
                </div>
              </div>
            </CSSTransition>
          );
        })}
      </TransitionGroup>
    </div>
  );
};

export default GalleryComponent;
