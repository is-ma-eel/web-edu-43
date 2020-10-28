import React from 'react';
// import {firebaseAuth} from './components/auth/provider/AuthProvider';
// import {Route, Switch} from 'react-router-dom';
import './App.css';
import WelcomePage from './components/layout/WelcomePage';
import CreateRoutes from './MainRouters';

function App() {
  return (
        <CreateRoutes>
            <WelcomePage />
        </CreateRoutes>
    
  );
}
export default App;
