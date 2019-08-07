import React from 'react';
import { Router } from '@reach/router';

//local
import HomePage from './pages/home';
import ProjectPage from './pages/project';

export default function App() {
  return (
    <Router>
      <HomePage path="/" />
      <ProjectPage path="/project/:projectID" />
    </Router>
  );
}
