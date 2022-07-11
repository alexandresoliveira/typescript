import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import Homepage from '../pages/Homepage';
import Dashboard from '../pages/Dashboard';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Homepage} />
    <Route path="/dashboard" component={Dashboard} isPrivate />
  </Switch>
);

export default Routes;
