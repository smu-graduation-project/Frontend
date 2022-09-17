import React, { useState } from 'react';
import './login.css';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import FormControlLabel from '@mui/material/FormControlLabel';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { useNavigate } from "react-router-dom";
import axios from "axios";
import 'url-search-params-polyfill';
import { cookies, setCookie, useCookies } from "react-cookie";
import {onLoginSuccess,onSilentRefresh} from "../../components/Loginpage/jwtrefresh"
axios.defaults.withCredentials = true;

// axios.defaults.headers.common['Authorization'] = cookies.get('access-token')
// axios.defaults.headers.common['authorization-refresh'] = cookies.get('refresh-token')


const Login = () => {
  const navigate = useNavigate(); // <-- call hook to get navigate function

  const [message, setMessage] = React.useState('');
  const [Id, setid] = React.useState('');
  const [pw, setPassword] = React.useState('');
  const [cookies, setCookie, removeCookie] = useCookies(["user-name"]);

  const signIn = () => {

    const data = {}
    data.username = Id
    data.password = pw
    

    axios.post("api/v1/login", data, { withCredentials: true })
      .then(function (response) {
        if (response.data.success == true) {
          console.log(response);
          console.log("Successfully Logged in ");
          console.log(response.headers["authorization"]);
          setCookie('refresh-token', response.headers["authorization-refresh"].substr(7));
          setCookie('access-token', response.headers["authorization"].substr(7));
          // (onLoginSuccess);
          navigate('/');
        }
        else if (response.data.success == false) {
          console.log("login failed");
          alert(response.data.message)
        }
      })
      .catch(function (error) {
        console.log(error);
      })

  }

  // //  headers: {
  //   'Authorization': getCookie('access-token'),
  //   'authorization-refresh': getCookie('refresh-token') 
  // },




  return (
    <div className="page-container">
      <div className="Loginbox">
        <div className="login-leftside">
          <div className="namebox">
            LORA IOT<br />
            DATA MANAGEMENT
          </div>
        </div>
        <div className="login-rightside">
          <Box
            sx={{
              width: '75%',
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Grid container>
              <Grid item xs>
                <FormControlLabel
                  control={<Checkbox value="admin" color="primary" />}
                  label="관리자"
                />
              </Grid>
              <Grid item>
                <FormControlLabel
                  control={<Checkbox value="user" color="primary" />}
                  label="사용자"
                />
              </Grid>
            </Grid>

            <TextField className="IDbox"
              margin="normal"
              label="ID"
              required
              fullWidth
              name="ID"
              id="Id"
              autoFocus
              onChange={e => setid(e.target.value)}
            />
            <TextField
              margin="normal"
              label="pw"
              type="password"
              id="pw"
              required
              fullWidth
              name="pw"
              autoComplete="current-password"
              onChange={e => setPassword(e.target.value)}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={signIn}
            >
              login
            </Button>

            {/* <Link>
                Forgot password?
              </Link> */}
          </Box>
        </div>
      </div>
    </div>

  );
}

export default Login;
