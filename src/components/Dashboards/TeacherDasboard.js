import React, { useEffect, useState, useContext } from 'react';
import Footer from '../layout/Footer';
import Navbar from '../layout/Navbar';
import dbdata from '../utils/data.json';
import schema from '../utils/schema.json';
import Table from './Table';
import {firebaseAuth} from '../auth/provider/AuthProvider';

function TeacherDashboard() {

  const {handleSignout} = useContext(firebaseAuth)

  return (
    <div>
      <Navbar />
      <div>
        <h3>Submissions</h3>
      </div>
      <div className="container p-2">
        <div className="row">
          <div className="col">
            <Table headers={Object.keys(schema)} rows={dbdata} />
            <button onClick={handleSignout}>Sign out</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default TeacherDashboard;
