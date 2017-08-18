import React from 'react';
import {Route, Router, IndexRoute} from 'react-router';
import About from './components/About/About';
import App from './components/App/App';

const Routes = (props) => (
  <Router {...props}>
    <Route path="/">
      <IndexRoute component={App} />
      <Route path="about" component={About} />
    </Route>
    {/*</Route>*/}
    {/*<Route path="*" component={NotFound} />*/}
  </Router>
);

export default Routes;