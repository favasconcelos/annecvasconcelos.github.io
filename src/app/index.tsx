import React from 'react';
import { Router } from '@reach/router';

//local
import HomePage from './pages/home-page';
import ProjectPage from './pages/project-page';

export default function App() {
  return (
    <Router>
      <HomePage path="/" />
      <ProjectPage path="/project/:projectID" />
    </Router>
  );
}
