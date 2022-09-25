import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  FormControl,
  FormControlLabel,
  Checkbox,
  FormHelperText,
  Grid,
  Box,
  Typography,
  Container,
} from '@mui/material/';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import styled from 'styled-components';
import CardContent from '@mui/material/CardContent';
import Paper from '@mui/material/Paper';

import Siteimg from './BatteryAdd_img';
import SiteMap from './SiteAdd_map';
import SiteAccordion from './BatteryAdd_sitelist';
import SiteList from './BatteryAdd_site';

// mui의 css 우선순위가 높기때문에 important를 설정 - 실무하다 보면 종종 발생 우선순위 문제
const FormHelperTexts = styled(FormHelperText)`
  width: 100%;
  padding-left: 16px;
  font-weight: 700 !important;
  color: #d32f2f !important;
`;

const Boxs = styled(Box)`
  padding-bottom: 40px !important;
`;


const BatteryReg = (props) => {
  const theme = createTheme();
  /*
  const theme = createTheme();
  const [batterynameState, setbatterynameState] = useState('');
  const [batterynameError, setbatterynameError] = useState('');
  const [typeState, settypeState] = useState('');
  const [typeError, settypeError] = useState('');
  const [infoState, setinfoState] = useState('');
  const [infoError, setinfoError] = useState('');
*/
  const [registerState, setregisterState] = useState('');
  const [registerError, setregisterError] = useState('');

  const history = useNavigate();
  const open = Boolean(registerState);

  const handleClick1 = () => {
    alert('등록 완료하였습니다.')
    }
/*
  const handleClick2 = () => {
    alert('조회 완료하였습니다.');
    }
*/
  const onhandlePost = async (data) => {
    const { name, type, information, siteId } = data;
    const postData = { name, type, information, siteId };
    

    // post
    await axios({
        method: 'post',
        url: 'http://220.149.31.104:9090/api/product/battery/add',
        data: postData,
        headers: {'Content-Type': 'multipart/form-data'},
        params: {siteId}
    })
      .then(function (response) {
        console.log(response, '성공');
      })
      .catch(function (err) {
        console.log(err);
        setregisterError('등록에 실패하였습니다. 다시 한번 확인해 주세요.');
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = new FormData(e.currentTarget);
    const joinData = {
      name: data.get('name'),
      type: data.get('type'),
      information: data.get('information'),
      siteId: data.get('siteId')
    };
    const { name, type, information, siteId } = joinData;

    if (name&&type&&information&&siteId) {
      onhandlePost(joinData);
    }
  };

  const Wrightsite = (e) => {
    if (e==true)
      return React.createElement(e) ;
  }

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
          <Typography component="h1" variant="h4">
            Add Battery
          </Typography>

          <br></br>
  
          <SiteAccordion></SiteAccordion>

          <Boxs component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <FormControl component="fieldset" variant="standard">
              <Grid container spacing={2}>
                
              <Grid item xs={12}>
                  <TextField
                    required
                    autoFocus
                    fullWidth
                    type="siteId"
                    id= "siteId"
                    name= "siteId"
                    label='Site id값을 입력해주세요.'
                  />
                </Grid>
                
                <Grid item xs={12}>
                  <TextField
                    required
                    autoFocus
                    fullWidth
                    type="name"
                    id="name"
                    name="name"
                    label="name"
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="type"
                    name="type"
                    label="type"
                  />
                </Grid>


                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="information"
                    name="information"
                    label="information"
                  />
                </Grid>

              </Grid>
              <Button
                type = "submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                size="large"
                onClick={handleClick1}
              >
                등록
              </Button>
            </FormControl>
          </Boxs>
        
      

      
        <CssBaseline />
          <Typography component="h1" variant="h4">
            Insert Image
          </Typography>
          
          <Siteimg></Siteimg>
        
      </Container>
    </ThemeProvider>

  );
};

export default BatteryReg;