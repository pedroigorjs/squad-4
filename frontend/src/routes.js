import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './app/pages/Home';
import Results from './app/pages/Results';

function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/results" component={Results} />
    </Switch>
  );
}

export default Routes;
