// jshint esversion: 6
import React, { useEffect, useState } from 'react';
import dbdata from "../utils/data.json";
import schema from "../utils/schema.json";
import Table from './Table';


function TeacherDashboard() {
  return (
    <div>
        <div>
      <h3>Submissions</h3>
    </div>
    <div className="container p-2">
        <div className="row">
          <div className="col">
            <Table headers={Object.keys(schema)} rows={dbdata} />
          </div>
        </div>        
      </div>
    </div>

    
  );
}


export default TeacherDashboard;
