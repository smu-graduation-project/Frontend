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

const Register = () => {
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
    const { id, information, name, port, type } = data;
    const postData = { id, information, name, port, type };

    // post
    await axios({
        method: 'post',
        url:'http://220.149.31.104:9090/api/product/node/add/1',
        headers: {'Content-Type': 'multipart/form-data'}
    })
      .then(function (response) {
        console.log(response, '성공');
        history.push('/login');
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
      id: data.get('id'),
      information: data.get('information'),
      name: data.get('name'),
      port: data.get('port'),
      type: data.get('type'),
    };
    const { id, information, name, port, type } = joinData;

    if (true) {
      onhandlePost(joinData);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'left',
          }}
        >
          <Typography component="h1" variant="h5">
            Add Node
          </Typography>
          <Boxs component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <FormControl component="fieldset" variant="standard">
              <Grid container spacing={2}>

                <FormHelperTexts>{nodenameState}</FormHelperTexts>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    type="id"
                    id="id"
                    name="id"
                    label="id"
                    error={nodenameState !== '' || false}
                  />
                </Grid>
                <FormHelperTexts>{nodenameState}</FormHelperTexts>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    type="information"
                    id="information"
                    name="information"
                    label="information"
                    error={nodenameState !== '' || false}
                  />
                </Grid>
                <FormHelperTexts>{nodenameState}</FormHelperTexts>
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
                <FormHelperTexts>{nodenameState}</FormHelperTexts>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    type="port"
                    id="port"
                    name="port"
                    label="port"
                    error={siteError !== '' || false}
                  />
                </Grid>
                <FormHelperTexts>{siteError}</FormHelperTexts>
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
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default Register;