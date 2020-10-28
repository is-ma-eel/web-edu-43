import React, {useContext} from 'react';
import Navbar from '../layout/Navbar';
import WelcomePage from '../layout/WelcomePage';
import Footer from '../layout/Footer';
import { firebaseAuth } from './provider/AuthProvider';

import { Link, useHistory } from 'react-router-dom';

// styles
import './Form.css';
import { useForm } from 'react-hook-form';

const SignIn = () => {

  // routing part
  let history = useHistory();

  // intialize hook
  const { register, handleSubmit, errors, reset } = useForm({
    mode: 'all',
    defaultValues: { email: 'John_Doe@gmail.com', password: 123456789 },
  });
  const {handleSignin, inputs, setInputs} = useContext(firebaseAuth)
  // const {handleSignup, inputs, setInputs, errors} = useContext(firebaseAuth)



  const handleChange = (e) => {
    const {name, value} = e.target
    console.log(inputs)
    setInputs(prev => ({...prev, [name]: value}))
  }


  const onSubmit = (data) => {
    /* note this redirect to studentdashboard after
      clicking on sign in is for expermentail purposes
      will be modified based on user type after authentication
    */
    history.push('/studentdashboard');
    console.log(data);
    // empty form fields
    reset();
  };

  return (
    <>
      <div className="main">
        <Navbar />
        <div className="row">
          <section className="col">
            <WelcomePage />
          </section>
          <section className="col form-container py-4 mb-3">
            <h2> Sign in</h2>

      <Navbar />
      <div className="row sign">
        <section className="col">
          <WelcomePage />
        </section>      
        <section className="col form-container py-4">
        <h2> Sign in</h2>

        <form className="form" onSubmit={handleSubmit(onSubmit)}>
          <div className="form-row">
            <span className="required-style">* </span>
            <div className="col">
              <input
                aria-label="Enter your email"
                aria-required="true"
                placeholder="Email"
                className="form-text form-control"
                type="email"
                name="email"
                autoFocus
                ref={register({
                  required: 'Email required'
                })}
              />
            </div>
            {errors.email && <p className="invalid-field">{errors.email.message}</p>}
          </div>

          <div className="form-row">
            <span className="required-style">* </span>
            <div className="col">
              <input
                aria-label="Enter your password"
                aria-required="true"
                placeholder="Password"
                className="form-text form-control"
                type="password"
                name="password"
                ref={register({
                  required: 'Password required'
                })}
              />
            </div>
            {errors.password && <p className="invalid-field">{errors.password.message}</p>}
          </div>
            <form className="form" onSubmit={handleSubmit(onSubmit)}>
              <div className="form-row">
                <span className="required-style">* </span>
                <div className="col mb-3">
                  <input
                    aria-label="Enter your email"
                    aria-required="true"
                    placeholder="Email"
                    className="form-text form-control"
                    type="email"
                    name="email"
                    autoFocus
                    ref={register({
                      required: 'Email required',
                    })}
                  />
                </div>
                {errors.email && <p className="invalid-field">{errors.email.message}</p>}
              </div>

              <div className="form-row">
                <span className="required-style">* </span>
                <div className="col mb-3">
                  <input
                    aria-label="Enter your password"
                    aria-required="true"
                    placeholder="Password"
                    className="form-text form-control"
                    type="password"
                    name="password"
                    ref={register({
                      required: 'Password required',
                    })}
                  />
                </div>
                {errors.password && <p className="invalid-field">{errors.password.message}</p>}
              </div>

              <button className="sub-btn btn btn-secondary btn-lg" type="submit">
                Sign in
              </button>

              <p>
                Don't have an account yet? <Link to="/signup">Sign up</Link> for free
              </p>
            </form>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SignIn;
