import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import ControllableStates from './AuthrDropdown';
import Button from '@mui/material/Button';

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'password', headerName: 'Password', width: 130 },
  { field: 'contact', headerName: 'Contact', type: 'number', width: 130 },
  {
    field: 'employeenum',
    headerName: 'EmployeeNum',
    type: 'number',
    width: 130,
  },
  {
    field: 'authority',
    headerName: 'Authority',
    width: 300,
    renderCell: (params) => (
      <strong>
        <ControllableStates />
      </strong>
    ),
  },

];

const rows = [
  { id: 1, password: 'Snow', contact: '010-0000-0000', employeenum: 35 },
  { id: 2, password: 'Lannister', contact: '010-0000-0000', employeenum: 42 },
  { id: 3, password: 'Lannister', contact: '010-0000-0000', employeenum: 45 },
  { id: 4, password: 'Stark', contact: '010-0000-0000', employeenum: 16 },
  { id: 5, password: 'Targaryen', contact: '010-0000-0000', employeenum: null },
  { id: 6, password: 'Melisandre', contact: '010-0000-0000', employeenum: 150 },
  { id: 7, password: 'Clifford', contact: '010-0000-0000', employeenum: 44 },
  { id: 8, password: 'Frances', contact: '010-0000-0000', employeenum: 36 },
  { id: 9, password: 'Roxie', contact: '010-0000-0000', employeenum: 65 },
];

export default function DataTable() {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
}