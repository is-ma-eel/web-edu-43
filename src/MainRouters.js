//All application routes go here
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// pages
import WelcomePage from './components/layout/WelcomePage';
import SignUp from './components/auth/SignUp';
import SignIn from './components/auth/SignIn';

const CreateRoutes = () => (
  <Router>
    <main className="container">
      <Switch>
        <Route exact path="/">
          <WelcomePage />
        </Route>
        <Route path="/signup">
          <SignUp />
        </Route>
        <Route path="/signin">
          <SignIn />
        </Route>
      </Switch>
    </main>
  </Router>
);

export default CreateRoutes;
