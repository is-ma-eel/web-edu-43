import React from 'react';
import Navbar from '../layout/Navbar';
import WelcomePage from '../layout/WelcomePage';
import Footer from '../layout/Footer';

import { Link, useHistory } from 'react-router-dom';

// styles
import './Form.css';

import { useForm } from 'react-hook-form';

const SignUp = () => {
  // routing part
  let history = useHistory();

  // intialize hook
  const { register, handleSubmit, errors, getValues, reset } = useForm({
    mode: 'all',
    defaultValues: { email: 'dwight@gmail.com', password: 123456789, confirm: 123456789 }
  });

  const onSubmit = data => {
    console.log(data);
    if (data.signup_type === 'teacher_signup') {
      history.push('/teacherdashboard');
    } else if (data.signup_type === 'student_signup') {
      history.push('/studentdashboard');
    }
    reset();
  };

  return (
    <>
      <Navbar />
      <WelcomePage />
      <section className="form-container">
        <h2> Sign up</h2>

        <form className="form" onSubmit={handleSubmit(onSubmit)}>
          <div className="form-row">
            <span className="required-style">* </span>
            <input
              aria-label="Enter your email"
              aria-required="true"
              placeholder="Email"
              className="form-text"
              type="email"
              name="email"
              autoFocus
              ref={register({
                required: 'Email required'
              })}
            />
            {errors.email && <p className="error">{errors.email.message}</p>}
          </div>

          <div className="form-row">
            <span className="required-style">* </span>
            <input
              aria-label="Enter your password"
              aria-required="true"
              placeholder="Password"
              className="form-text"
              type="password"
              name="password"
              ref={register({
                required: 'Password required',
                minLength: { value: 8, message: 'Too short, must be at least 8 chars' }
              })}
            />
            {errors.password && <p className="error">{errors.password.message}</p>}
          </div>

          <div className="form-row">
            <span className="required-style">* </span>
            <input
              aria-label="Enter your password to confirm"
              aria-required="true"
              placeholder="Confirm Password"
              className="form-text"
              type="password"
              name="confirm"
              ref={register({
                validate: value =>
                  // value is from confirm and watch will return value from password
                  value === getValues('password') || (
                    <span className="error">Password fields don't match</span>
                  ),
                required: 'Password required',
                minLength: { value: 8, message: 'Too short' }
              })}
            />

            {errors.confirm && <p className="error">{errors.confirm.message}</p>}
          </div>

          <div className="form-row">
            <input
              type="radio"
              name="signup_type"
              id="teacher_signup"
              value="teacher_signup"
              defaultChecked
              ref={register}
            />
            <label htmlFor="teacher_signup">Teacher sign up</label>
            <br />

            <input
              type="radio"
              name="signup_type"
              id="student_signup"
              value="student_signup"
              ref={register}
            />
            <label htmlFor="student_signup">Student sign up</label>
            <br />
          </div>

          <button className="sub-btn" type="submit">
            Sign up
          </button>

          <p>
            Already have an account? <Link to="/signin">Log in</Link>
          </p>
        </form>
      </section>

      <Footer />
    </>
  );
};

export default SignUp;
