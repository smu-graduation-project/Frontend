import * as React from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Title from './Title';
import batteryimg from './기본배터리셀.png';

function preventDefault(event) {
  event.preventDefault();
}

export default function Deposits() {
  return (
    <React.Fragment>
      <Title>Node1</Title>
        <img src = {batteryimg} width='' height='240' /> 
    </React.Fragment>
  );
}