import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Projects from './oldFiles/Projects';
import Moody from './oldFiles/Moody';
import Scene from './model/onSceneReady';
import Privacy from './Privacy';
import Home from '../home/home';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/privacy" component={Privacy} />
      <Route path="/" component={Scene} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
