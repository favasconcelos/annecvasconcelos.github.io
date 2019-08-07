import React from 'react';
import uuid from 'uuid';
// local
import './images.scss';
import SectionComponent from '../section';
import { Section } from '../project/type';

interface ImagesProps {
  sections?: Section[];
}

const ImagesComponent: React.FC<ImagesProps> = props => {
  if (!props.sections) {
    return null;
  }
  return (
    <div id="images">
      {props.sections.map(section => (
        <SectionComponent key={uuid.v4()} section={section} className={section.type} />
      ))}
    </div>
  );
};

export default ImagesComponent;
