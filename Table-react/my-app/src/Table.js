import React from 'react';
import { useTable } from 'react-table';

const Table = ({ data }) => {
    console.log(data)
  // Define your table columns and data
  const columns = React.useMemo(
    () => [
      {
        Header: 'Name',
        accessor: 'name', // The accessor is used to access the data property in your data array
      },
      {
        Header: 'Age',
        accessor: 'age',
      },
      {
        Header: 'Country',
        accessor: 'country',
      },
    ],
    []
  );

  // Create an instance of the table
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({
    columns,
    data,
  });

  return (
    <table {...getTableProps()} className="table">
      <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps()}>{column.render('Header')}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => {
                // return (
                  <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                // );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
