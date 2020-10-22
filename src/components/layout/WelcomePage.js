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
      <section className="container welcome-page text-center py-5">
        <h1 className="main-heading text-center">ASSIGNMENT</h1>
        <h4 className="sub-heading">Submit your assignment</h4>
        <h4 className="sub-heading">Get feedback</h4>
        {/* image attribute for free use 
         <a href="http://www.freepik.com">Designed by pch.vector / Freepik</a> */}
        <img
          className="welcome-img"
          src={welcome_image}
          alt="two people commnuicate with thier computers"
        />
        <p>
          The best platform to upload your assignments with ease and get quick review from your teachers.        
          You can review your students' assignments with ease and give feedback.
        </p>        
      </section>
      {/* add sign up & sign in only if we are in welcome page*/}
      {location.pathname === '/' && (
        <div className="sign">
          <Link to="/signup" className="sign-up btn btn-secondary btn-lg">Sign up</Link>
          <Link to="/signin" className="sign-in btn btn-default btn-lg">Sign in</Link>
        </div>
      )}
    </>
  );
};

export default WelcomePage;
