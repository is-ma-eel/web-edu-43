import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import CreateRoutes from './MainRouters';

ReactDOM.render(
  <React.StrictMode>
    {/* <CreateRoutes> */}
    <App />
    {/* </CreateRoutes> */}
  </React.StrictMode>,
  document.getElementById('root')
);
