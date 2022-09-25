/*

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

import Imageinsert from './BatteryAdd_img';

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

const Input = styled('input')({
  display: 'none',
});

const BatteryPost = (props) => {
  const theme = createTheme();
  const [nodenameState, setnodenameState] = useState('');
  const [nodenameError, setnodenameError] = useState('');
  const [siteError, setsiteError] = useState('');
  const [batteryError, setbatteryError] = useState('');
  const [registerError, setregisterError] = useState('');
  const history = useNavigate();

  const handleClick = () => {
    alert('등록 완료하였습니다.')
    }

  const onhandlePost = async (data) => {
    const { name, type, information } = data;
    const postData = { name, type, information };

    // post
    await axios({
        method: 'post',
        url: 'http://220.149.31.104:9090/api/product/battery/add',
        headers: {'Content-Type': 'multipart/form-data'}
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
      information: data.get('information')
    };
    const { name, type, information } = joinData;

    if (true) {
      onhandlePost(joinData);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
          <Typography component="h1" variant="h4">
            Add Battery
          </Typography>
          <Boxs component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <FormControl component="fieldset" variant="standard">
              <Grid container spacing={2}>
                
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    type="name"
                    id="name"
                    name="name"
                    label="name"
                    error={nodenameState !== '' || false}
                  />
                </Grid>
                <FormHelperTexts>{batteryError}</FormHelperTexts>

                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="type"
                    name="type"
                    label="type"
                    error={batteryError !== '' || false}
                  />
                </Grid>
                <FormHelperTexts>{batteryError}</FormHelperTexts>

                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="information"
                    name="information"
                    label="information"
                    error={batteryError !== '' || false}
                  />
                </Grid>
                <FormHelperTexts>{batteryError}</FormHelperTexts>

              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                size="large"
                onClick={handleClick}
              >
                등록
              </Button>
            </FormControl>
          </Boxs>
        
      

      
        <CssBaseline />
          <Typography component="h1" variant="h4">
            Insert Image
          </Typography>
          <Boxs component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                size="large"
                onClick={handleClick}
              >
                Site 조회
              </Button>

              <div> <mark> 여기에 site 한번 언급해주기 </mark> </div>

              <label htmlFor="contained-button-file">
              <Input accept="image/*" id="contained-button-file" multiple type="file"/>
              <Button
              type="submit" 
              fullwidth 
              variant="contained"  
              sx={{ mt: 3, mb: 2 }}
              size="large"
              
              >
                  Image Upload
              </Button>
              </label>

              <div component="h6" variant="h6" text-secondary text-centered >
              미 지정시, 기본 이미지로 저장됩니다.
              </div>
             
            <FormControl component="fieldset" variant="standard">
              <Grid container spacing={2}>
                
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    type="name"
                    id="name"
                    name="name"
                    label="name"
                    error={nodenameState !== '' || false}
                  />
                </Grid>
                <FormHelperTexts>{batteryError}</FormHelperTexts>

                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="type"
                    name="type"
                    label="type"
                    error={batteryError !== '' || false}
                  />
                </Grid>
                <FormHelperTexts>{batteryError}</FormHelperTexts>

                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="information"
                    name="information"
                    label="information"
                    error={batteryError !== '' || false}
                  />
                </Grid>
                <FormHelperTexts>{batteryError}</FormHelperTexts>

              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                size="large"
                onClick={handleClick}
              >
                등록
              </Button>
            </FormControl>
          </Boxs>
        
      </Container>
    </ThemeProvider>

  );
};

export default BatteryPost;

*/