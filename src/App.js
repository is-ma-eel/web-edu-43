import React from 'react';
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
