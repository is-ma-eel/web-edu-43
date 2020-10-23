import React from 'react';
import Navbar from '../layout/Navbar';
import WelcomePage from '../layout/WelcomePage';
import Footer from '../layout/Footer';

import { Link } from 'react-router-dom';

// styles
import './Form.css';

import { useForm } from 'react-hook-form';

const SignIn = () => {
  // intialize hook
  const { register, handleSubmit, errors, reset } = useForm({
    mode: 'all',
    defaultValues: { email: 'dwight@gmail.com', password: 123456789 }
  });

  const onSubmit = data => {
    console.log(data);
    reset();
  };

  return (
    <>
      <Navbar />
      {/* <WelcomePage /> */}
      <section className="form-container mt-5 mb-5 offset-md-3 col-md-6 offset-md-3">
        <h2> Sign in</h2>

        <form className="form" onSubmit={handleSubmit(onSubmit)}>
          <div className="form-row">
            <span className="required-style">* </span>
            <div class="col">
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
            {errors.email && <p className="error">{errors.email.message}</p>}
          </div>

          <div className="form-row">
            <span className="required-style">* </span>
            <div class="col">
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
            {errors.password && <p className="error">{errors.password.message}</p>}
          </div>

          <button className="sub-btn btn btn-secondary btn-lg" type="submit">
            Sign in
          </button>

          <p>
            Don't have an account yet? <Link to="/signup">Sign up</Link> for free
          </p>
        </form>
      </section>
      <Footer />
    </>
  );
};

export default SignIn;
