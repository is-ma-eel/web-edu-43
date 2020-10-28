import React, { useState } from 'react';
import { authMethods } from '../firebase/authmethods';

export const firebaseAuth = React.createContext();

const AuthProvider = (props) => {
  // State (token, input and error)
  const [inputs, setInputs] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState([]);
  const [token, setToken] = useState(null);

  const handleSignup = () => {
    console.log('handleSignup');
    authMethods.signup(inputs.email, inputs.password, setErrors, setToken);
    console.log(errors, token);
  };

  const handleSignin = () => {
    console.log('handleSignin!!!');
    authMethods.signin(inputs.email, inputs.password, setErrors, setToken);
    console.log(errors, token);
  };

  const handleSignout = () => {
    authMethods.signout();
  };

  return (
    <firebaseAuth.Provider
      value={{
        handleSignup,
        handleSignin,
        token,
        inputs,
        setInputs,
        errors,
        handleSignout,
      }}
    >
      {props.children}
    </firebaseAuth.Provider>
  );
};

export default AuthProvider;
