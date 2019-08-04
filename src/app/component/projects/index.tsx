import React from 'react';
//local
import './projects.scss';
import Card from '../card';

const PROJECTS = [
  {
    title: 'Brega Museum',
    year: 2017,
  },
  {
    title: 'Dacraena tattoo gallery',
    year: 2016,
  },
  {
    title: 'Loft - Studio 54',
    year: 2017,
  },
  {
    title: 'Water Square',
    year: 2017,
  },
  {
    title: 'Multifamily Residential',
    year: 2017,
  },
];

const Projects: React.FC = () => {
  return (
    <div id="projects">
      {PROJECTS.map(project => {
        return <Card />;
      })}
    </div>
  );
};

export default Projects;
