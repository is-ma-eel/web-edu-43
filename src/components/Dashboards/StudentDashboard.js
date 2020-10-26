import React from 'react';
import Footer from '../layout/Footer';
import Navbar from '../layout/Navbar';
import dbdata from '../utils/data.json';
import schema from '../utils/studentSchema.json';
import Table from './Table';

const StudentDashboard = () => {
  console.log(schema);
  return (
    <div>
      <Navbar />
      <div>
        <h3>Submissions</h3>
      </div>
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
