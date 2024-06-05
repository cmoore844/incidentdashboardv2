import React from 'react';

const TableComponent = ({ data }) => {
  const headers = Object.keys(data[0]);
  const rows = data.map(item => Object.values(item));
  console.log("ROWS", rows);
  console.log("HEADERS", headers);

  return (
    <table>
      <thead>
        <tr>
          {headers.map(header => <th key={header}>{header}</th>)}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, index) => (
          <tr key={index}>
            {row.map((cell, index) => <td key={index}>{cell}</td>)}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableComponent;
