<<<<<<< HEAD
// jshint esversion: 6
=======
>>>>>>> 5a1d5f37209827e0701877234881158b47b20dc9
import React from 'react';
import TableHeader from './TableHeader';
import TableBody from './TableBody';

const Table = (props) => {  
  const {headers, rows} = props;
  return (
    <div>
      <table className="table table-bordered table-hover">
        <TableHeader headers={headers}></TableHeader>
        <TableBody headers={headers} rows={rows}></TableBody>
      </table>
    </div>
  );
}

<<<<<<< HEAD
export default Table;
=======
export default Table;
>>>>>>> 5a1d5f37209827e0701877234881158b47b20dc9
