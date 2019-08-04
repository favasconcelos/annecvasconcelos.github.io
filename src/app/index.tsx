import React from 'react';
//local
import Header from './component/header';
import Projects from './component/projects';

const App: React.FC = () => {
  return (
    <React.Fragment>
      <Header />
      <Projects />
    </React.Fragment>
  );
};

export default App;
