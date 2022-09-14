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
import Sitemap from './SiteAdd_map.js';

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

function Register(props) {
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
    const { name, address } = data;
    const postData = { name, address };

    // post
    await axios({
        method: 'post',
        url: '/setting/addsite',
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
      name: data.get('name'),
      address: data.get('address')
    };
    const { name, address } = joinData;

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
            Add Site
          </Typography>
          <Boxs component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <FormControl component="fieldset" variant="standard">
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    type="sitename"
                    id="sitename"
                    name="sitename"
                    label="Site 명"
                    error={nodenameState !== '' || false}
                  />
                </Grid>
                <FormHelperTexts>{nodenameState}</FormHelperTexts>
                <Grid item xs={12}>
                  <Sitemap></Sitemap>
                </Grid>

                <p>{props.address}</p>

                <FormHelperTexts>{siteError}</FormHelperTexts>
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