<<<<<<< HEAD
// jshint esversion : 6
=======
>>>>>>> 5a1d5f37209827e0701877234881158b47b20dc9
import React from 'react';

const TableHeader = (props) => {
  const {headers} = props;
  return(
      <thead className = "thead-dark" key="header-1">
        <tr key="header-0">
          {headers && headers.map((value, index) => {
            return <th key={index}>
              <div>{value}</div>
            </th>
          })}
        </tr>
      </thead>      
  );
}

<<<<<<< HEAD
export default TableHeader;
=======
export default TableHeader;
>>>>>>> 5a1d5f37209827e0701877234881158b47b20dc9
