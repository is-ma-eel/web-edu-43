import React from 'react';
import welcome_image from '../../images/welcome_img.png';

// react router
import { Link } from 'react-router-dom';

// styles
import './WelcomePage.css';

const WelcomePage = () => {
  return (
    <section className="welcome">
      <h1 className="main-heading">ASSIGNMENT</h1>
      <p>Submit your assignment</p>
      <p>Get feedback</p>
      <img
        className="welcome-img"
        src={welcome_image}
        alt="two people commnuicate with thier computers"
      />
      <p>
        A platform on which students can submit their assignment for their teachers to grade them
        and give feedback.
      </p>
      {/* <Link to="/signin">Sign up</Link> */}
      {/* <Link to="/signup">Sign in</Link> */}
    </section>
  );
};

export default WelcomePage;
