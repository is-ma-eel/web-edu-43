//All application routes go here
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// pages
import WelcomePage from './components/layout/WelcomePage';
import SignUp from './components/auth/SignUp';
import SignIn from './components/auth/SignIn';
import TeacherDashboard from './components/Dashboards/TeacherDasboard';
import StudentDashboard from './components/Dashboards/StudentDashboard';
import SubmissionPage from './components/Dashboards/SubmissionPage';
const CreateRoutes = () => (
  <Router>
    <main className="container col-md-8 offset-md-2">
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
        <Route path="/teacherdashboard">
          <TeacherDashboard />
        </Route>
        <Route path="/studentdashboard">
          <StudentDashboard />
        </Route>
        <Route path="/submissionpage">
          <SubmissionPage />
        </Route>
      </Switch>
    </main>
  </Router>
);

export default CreateRoutes;
