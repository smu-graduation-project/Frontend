import * as React from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Title from './Title';
import batteryimg from './기본배터리셀.png';

import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

function preventDefault(event) {
  event.preventDefault();
}
const Input = styled('input')({
  display: 'none',
});

export default function Deposits() {
  return (
    <React.Fragment>
      <Title>Node1</Title>
        <img src = {batteryimg} width='' height='240' />
        
        <label htmlFor="contained-button-file">
        <Input accept="image/*" id="contained-button-file" multiple type="file"/>
        <Button variant="contained" component="span" sx={{ marginLeft: "50%", marginRight: "auto" }}>
            Upload
        </Button>
        </label>
    </React.Fragment>
  );
}