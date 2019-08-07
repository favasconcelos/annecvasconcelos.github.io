import React from 'react';
// local
import './section.scss';
import { Section, SectionType } from '../project-view/type';

interface SectionListProps {
  sections: Section[];
}

const SectionList: React.FC<SectionListProps> = props => {
  return (
    <div id="sections">
      {props.sections.map(section => {
        switch (section.type) {
          case SectionType.TYPE_1:
            return <Section1 section={section} />;
          case SectionType.TYPE_2:
            return <Section2 section={section} />;
          case SectionType.TYPE_3:
            return <Section3 section={section} />;
        }
      })}
    </div>
  );
};

interface SectionProps {
  section: Section;
}

const Section1: React.FC<SectionProps> = props => {
  const image = props.section.images[0];
  return (
    <div className="section1">
      <img src={image} alt="" />
    </div>
  );
};

const Section2: React.FC<SectionProps> = props => {
  const image1 = props.section.images[0];
  const image2 = props.section.images[1];
  return (
    <div className="section2">
      <img src={image1} alt="" />
      <img src={image2} alt="" />
    </div>
  );
};

const Section2: React.FC<SectionProps> = props => {
  const image = props.section.images[0];
  return (
    <div className="section1">
      <img src={image} alt="" />
    </div>
  );
};
