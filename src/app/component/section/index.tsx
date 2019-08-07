import React from 'react';
import uuid from 'uuid';
// local
import { Section } from '../project/type';
import ImageComponent from '../image';

interface SectionProps {
  className: string;
  section: Section;
}

const SectionComponent: React.FC<SectionProps> = ({ className, section }) => {
  return (
    <div className={className}>
      {section.images.map(image => (
        <ImageComponent key={uuid.v4()} image={image} />
      ))}
    </div>
  );
};

export default SectionComponent;
