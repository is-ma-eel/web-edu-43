import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import AuthProvider from '../src/components/auth/provider/AuthProvider';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
      <AuthProvider>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </AuthProvider>  
  </BrowserRouter>
  , document.getElementById('root')
);
