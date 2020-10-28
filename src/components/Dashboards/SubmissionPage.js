import React from 'react';
import Footer from '../layout/Footer';
import Navbar from '../layout/Navbar';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import './submission.css';

const SubmissionPage = () => {
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
        <h3>Add Assignment</h3>
        <Link to="/studentdashboard" className="sub-btn btn btn-secondary btn-lg">
          Back to your dashboard
        </Link>
      </nav>

      <form className="form col-lg-6" onSubmit={handleSubmit(onSubmit)}>
        <div className="form-row">
          <div className="col">
            <textarea
              rows="10"
              aria-label="Enter your assignment and comments"
              aria-required="true"
              placeholder="Enter your assignment and comments"
              className="form-text form-control"
              type="comment"
              name="comment"
              ref={register}
            />
          </div>
        </div>
        {/* value[0].type === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' ||'Upload only .pdf/.docx file'        */}
        {/* type: value => value[0].type === 'application/pdf' || 'Upload only .pdf/.docx file', */}
        <div className="form-row">
          <div className="col">
            <input
              className="form-control-file"
              type="file"
              name="assignmentFile"
              id="upload-file"
              ref={register({
                validate: {
                  size: (value) => value[0].size < 2000000 || 'size is big',

                  type: (value) =>
                    value[0].name.includes('.pdf') ||
                    value[0].name.includes('.docx') ||
                    'Upload only .pdf/.docx file',
                },

                required: 'required',
              })}
            />
            {errors.assignmentFile && (
              <p className="invalid-field">{errors.assignmentFile.message}</p>
            )}
            <p>Upload only .pdf/.docx file</p>
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

export default SubmissionPage;
