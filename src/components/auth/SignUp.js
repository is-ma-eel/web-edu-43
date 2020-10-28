import React, {useContext} from 'react';
import Navbar from '../layout/Navbar';
import WelcomePage from '../layout/WelcomePage';
import Footer from '../layout/Footer';
import { useForm } from 'react-hook-form';
import { Link, useHistory } from 'react-router-dom';
import { firebaseAuth } from './provider/AuthProvider';
import { withRouter } from 'react-router-dom';
// styles
import './Form.css';


const SignUp = (props) => {


  // routing part
  let history = useHistory();

  // intialize hook (register replace handlesignup, handlesubmit = inputs, )
  const { register, handleSubmit, errors, getValues, reset } = useForm({
    mode: 'all'
  });
  const {handleSignup, inputs, setInputs} = useContext(firebaseAuth)
  // const {handleSignup, inputs, setInputs, errors} = useContext(firebaseAuth)


  const handleChange = (e) => {
    const {name, value} = e.target
    console.log(inputs)
    setInputs(prev => ({...prev, [name]: value}))
  }

  // const handleSubmit = async (e) => {
  //   e.preventDefault()
  //   console.log('handleSubmit')
  //   //wait to signup 
  //   await handleSignup()
  //   //push home
  //   props.history.push('/')
  // }


  const onSubmit = data => {
    console.log(data);
    if (data.signup_type === 'teacher_signup') {
      history.push('/teacherdashboard');
    } else if (data.signup_type === 'student_signup') {
      props.history.push('/studentdashboard');
    }
    reset();
  };

  return (
    <>
    <div className="main">

      <Navbar />
      <div className="row sign">
        <section className="col">
          <WelcomePage />
        </section>

        <section className="col form-container py-4">
          <h2> Sign up</h2>

            <form className="form" onSubmit={handleSubmit(onSubmit)}>
              <div className="form-row">
                <span className="required-style">* </span>
                <div className="col">
                  <input
                    onChange={handleChange}
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
                    onChange={handleChange}
                    aria-label="Enter your password"
                    aria-required="true"
                    placeholder="Password"
                    className="form-text form-control"
                    type="password"
                    name="password"
                    ref={register({
                      required: 'Password required',
                      minLength: { value: 8, message: 'Too short, must be at least 8 chars' }
                    })}
                  />
                </div>
                {errors.password && <p className="invalid-field">{errors.password.message}</p>}
              </div>

              <div className="form-row">
                <span className="required-style">* </span>
                <div className="col">
                  <input
                    aria-label="Enter your password to confirm"
                    aria-required="true"
                    placeholder="Confirm Password"
                    className="form-text form-control"
                    type="password"
                    name="confirm"
                    ref={register({
                      validate: value =>
                        // value is from confirm and watch will return value from password
                        value === getValues('password') || <span>Password fields don't match</span>,
                      required: 'Password required',
                      minLength: { value: 8, message: 'Too short' }
                    })}
                  />
                </div>
                {errors.confirm && <p className="invalid-field">{errors.confirm.message}</p>}
              </div>

              <div className="form-row">
                <div className="form-check">
                  <input
                    type="radio"
                    name="signup_type"
                    id="teacher_signup"
                    value="teacher_signup"
                    defaultChecked
                    ref={register}
                  />
                  <label htmlFor="teacher_signup"> Teacher sign up</label>
                </div>
                <br />
                <div className="form-check">
                  <input
                    type="radio"
                    name="signup_type"
                    id="student_signup"
                    value="student_signup"
                    ref={register}
                  />
                  <label htmlFor="student_signup"> Student sign up</label>
                </div>
                <br />
              </div>

              <button className="sub-btn btn btn-secondary btn-lg" type="submit">
                Sign up
              </button>
              {errors.length > 0 ? errors.map(error => <p style={{color: 'red'}}>{errors}</p> ) : null}

              <p>
                Already have an account? <Link to="/signin">Log in</Link>
              </p>
            </form>
          </section>
      </div>
      </div>

      <Footer />

    </>
  );
};

export default withRouter(SignUp);
