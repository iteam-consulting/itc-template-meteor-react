import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

// Import needed templates
import Home from '../../ui/pages/home/home.js';
import NotFound from '../../ui/pages/not-found/not-found.js';

/**
 * The app routes.
 */
class Routes extends React.Component {
  /**
   * Render the app routes
   * @return {React.ReactNode} The renderable component.
   */
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Routes;
