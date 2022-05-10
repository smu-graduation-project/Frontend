import * as React from 'react';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from './Title';

// Generate Order Data
function createData(id, name, site, battery, admin, details) {
  return { id, name, site, battery, admin, details };
}

const rows = [
  createData(
    0,
    'node_1',
    'SITE 1',
    'BATTERY 1',
    '삼성전자 전산1팀',
    '특이사항 무'
  )
];

function preventDefault(event) {
  event.preventDefault();
}

export default function Orders() {
  return (
    <React.Fragment>
      <Title>Details</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Node Name</TableCell>
            <TableCell>Site</TableCell>
            <TableCell>Battery</TableCell>
            <TableCell>Admin</TableCell>
            <TableCell align="right">Details</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.site}</TableCell>
              <TableCell>{row.battery}</TableCell>
              <TableCell>{row.admin}</TableCell>
              <TableCell align="right">{`${row.details}`}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </React.Fragment>
  );
}