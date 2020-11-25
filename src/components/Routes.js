import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Projects from './Projects';
import Moody from './Moody';
import Privacy from './Privacy';
import Home from '../pages/home.tsx';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/privacy" component={Privacy} />
      <Route path="/" component={Home} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
