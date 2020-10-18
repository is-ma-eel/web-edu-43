import React from 'react';
import welcome_image from '../../images/welcome_img.png';

// react router
import { Link, useLocation } from 'react-router-dom';

// styles
import './WelcomePage.css';

const WelcomePage = () => {
  const location = useLocation();
  console.log(location.pathname);

  return (
    <>
      <section className="container">
        <h1 className="main-heading">ASSIGNMENT</h1>
        <p>Submit your assignment</p>
        <p>Get feedback</p>
        {/* image attribute for free use */}
        {/* <a href="http://www.freepik.com">Designed by pch.vector / Freepik</a> */}
        <img
          className="welcome-img"
          src={welcome_image}
          alt="two people commnuicate with thier computers"
        />
        <p>
          A platform on which students can submit their assignment for their teachers to grade them
          and give feedback.
        </p>
      </section>
      {/* add sign up & sign in only if we are in welcome page*/}
      {location.pathname === '/' && (
        <>
          <Link to="/signup">Sign up</Link>
          <Link to="/signin">Sign in</Link>
        </>
      )}
    </>
  );
};

export default WelcomePage;
