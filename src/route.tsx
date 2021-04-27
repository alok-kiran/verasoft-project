import React from 'react';
import { Redirect, Route, Switch, BrowserRouter } from 'react-router-dom';

import App from './containers/App';

const Routes: React.SFC = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
