//All application routes go here
import React, { useContext } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { firebaseAuth } from './components/auth/provider/AuthProvider';

// pages
import WelcomePage from './components/layout/WelcomePage';
import SignUp from './components/auth/SignUp';
import SignIn from './components/auth/SignIn';
import TeacherDashboard from './components/Dashboards/TeacherDasboard';
import StudentDashboard from './components/Dashboards/StudentDashboard';
import SubmissionPage from './components/Dashboards/SubmissionPage';
import GradingPage from './components/Dashboards/GradingPage';

const CreateRoutes = () => {
  const { token } = useContext(firebaseAuth);
  console.log(token);

  return (
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
          <Route
            exact
            path="/teacherdashboard"
            render={(rProps) => (token === null ? <SignIn /> : <TeacherDashboard />)}
          ></Route>
          <Route path="/studentdashboard">
            <StudentDashboard />
          </Route>
          <Route path="/submissionpage">
            <SubmissionPage />
          </Route>
          <Route path="/gradingpage">
            <GradingPage />
          </Route>
        </Switch>
      </main>
    </Router>
  );
};

export default CreateRoutes;
