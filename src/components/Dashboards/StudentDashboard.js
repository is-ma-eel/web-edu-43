import React from 'react';
import Footer from '../layout/Footer';
import Navbar from '../layout/Navbar';
import dbdata from '../utils/data.json';
import schema from '../utils/studentSchema.json';
import Table from './Table';
import { Link } from 'react-router-dom';

const StudentDashboard = () => {
  console.log(schema);
  return (
    <div>
      <Navbar />
      <nav className="dashboard-nav d-flex justify-content-between m-3">
        <h3>Submissions</h3>
        <Link to="/submissionpage" className="sub-btn btn btn-secondary btn-lg">
          Add Assignment
        </Link>
      </nav>
      <div className="container p-2">
        <div className="row">
          <div className="col">
            <Table headers={Object.keys(schema.submissionSchema)} rows={dbdata[0].submission} />
          </div>
        </div>
      </div>
      <div>
        <h3>Reviewed Assignments</h3>
      </div>
      <div className="container p-2">
        <div className="row">
          <div className="col">
            <Table headers={Object.keys(schema.reviewedSchema)} rows={dbdata[0].reviewed} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default StudentDashboard;
