import React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [ //Error type: 전압오류, 전류오류, 온도오류, 연결끊김
  { field: 'id', headerName: 'Error', width: 100,sortable: false },
  { field: 'password', headerName: 'Site',type: 'number',  width: 130 },
  { field: 'contact', headerName: 'Battery', type: 'number', width: 130 },
  { field: 'employeenum', headerName: 'Node', type: 'number', width: 130 },
  { field: 'authority', headerName: 'Time', type: 'number', width: 160 },
];

const rows = [
  { id: '전압오류', password: '1', contact: '12', employeenum: 35 },
  { id: '전류오류', password: '2', contact: '23', employeenum: 42 },
  { id: '온도오류', password: '3', contact: '34', employeenum: 45 },
  { id: '전류오', password: '4', contact: '45', employeenum: 16 },
  //{ id: '전압오류', password: '6', contact: '', employeenum: 150 },
  //{ id: '온도오류', password: '7', contact: '', employeenum: 44 },
  //{ id: '전류오류', password: '8', contact: '', employeenum: 36 },
  { id: '연결끊김', password: '9', contact: '56', employeenum: 65 },
];

export default function AlertTable() {
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