import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
//local
import HomePage from './pages/home-page';
import ProjectPage from './pages/project-page';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomePage} />;
        <Route path="/project/:id" component={ProjectPage} />;
      </Switch>
    </BrowserRouter>
  );
};

export default App;
