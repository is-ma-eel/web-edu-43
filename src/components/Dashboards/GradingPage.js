import React from 'react';
import Footer from '../layout/Footer';
import Navbar from '../layout/Navbar';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import './submission.css';

const GradingPage = () => {
  // intialize hook
  const { register, handleSubmit, errors, reset } = useForm({
    mode: 'all',
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div>
      <Navbar />
      <nav className="dashboard-nav d-flex justify-content-md-between flex-md-row flex-column m-3">
        <h3>Grading Page</h3>
        <Link to="/teacherdashboard" className="sub-btn btn btn-secondary btn-lg">
          Back to your dashboard
        </Link>
      </nav>

      <div className="offset-lg-6 col-lg-6 d-flex justify-content-md-between flex-md-row flex-column">
        <p>John Doe</p>
        <p>Mathematics</p>
      </div>

      <Link className="sub-btn btn btn-secondary btn-lg ml-3" to="" download="My_File.pdf">
        Download File
      </Link>

      <form className="form col-lg-6" onSubmit={handleSubmit(onSubmit)}>
        <div className="form-row">
          <div className="col mb-3">
            <textarea
              rows="10"
              aria-label="Enter your comment"
              aria-required="true"
              placeholder="Comment"
              className="form-text form-control"
              type="comment"
              name="comment"
              ref={register}
            />
          </div>
        </div>

        <div className="form-row">
          <div className="col  mb-3">
            <label for="grades">Choose a grade:</label>

            <select name="grades" id="grades" ref={register}>
              <option value="a">A</option>
              <option value="b">B</option>
              <option value="c">C</option>
              <option value="d">D</option>
              <option value="f">F</option>
            </select>
          </div>
        </div>

        <div className="d-flex flex-md-row flex-column justify-content-md-between mb-3">
          <button className="sub-btn btn btn-secondary btn-lg" type="submit">
            Submit
          </button>
          <button className="sub-btn btn btn-default btn-lg" type="reset">
            cancel
          </button>
        </div>
      </form>
      <Footer />
    </div>
  );
};

export default GradingPage;
