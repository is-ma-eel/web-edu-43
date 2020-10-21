<<<<<<< HEAD
// jshint esversion: 6
=======
>>>>>>> 5a1d5f37209827e0701877234881158b47b20dc9
import React from 'react';

const TableBody = (props) => {
  const {headers, rows} = props;  
  function buildRow(row, headers) {
    return(
      <tr key={row.id}>
        {headers.map((value, index) => {
          return <td key={index}> {row[value]}</td>
        })}
      </tr>
    )
  };

  return(
    <tbody>      
          {rows && rows.map((value) => {
            return buildRow(value, headers);
          })}        
    </tbody>
  );
}

<<<<<<< HEAD
export default TableBody;
=======
export default TableBody;
>>>>>>> 5a1d5f37209827e0701877234881158b47b20dc9
