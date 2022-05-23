import React, { useState } from 'react';
import './login.css';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import FormControlLabel from '@mui/material/FormControlLabel';
// import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import {useNavigate} from "react-router-dom";
import axios from "axios";
import 'url-search-params-polyfill';
//import { useCookies } from "react-cookie";



  const Login = () => {
    const navigate = useNavigate(); // <-- call hook to get navigate function
  
    const [message, setMessage] = React.useState('');
    const [Id, setid] = React.useState('');
    const [pw, setPassword] = React.useState('');
    
    // const [cookies,setCookie,removeCookie] = useCookies(["user"]);

    const signIn = () => {
      // const data = { userId, password };
  
      
      const requestInfo = {
        url : 'http://220.149.31.104:9090/users/v1/api/signIn',
        method: 'POST',
        data:{
          userId:Id,
          password:pw,
        },
        //headers: new Headers{
        //   'Content-Type':'application/json'
        // },
      };
      const params=new URLSearchParams();
      params.append('userId',Id)
      params.append('password',pw)

      axios.post('http://220.149.31.104:9090/v1/api/signIn', params)
        // .then(response => {
        //   if (response.ok) {
        //     return response.json();
        //   }  
        //   throw new Error('로그인실패');
        // })
        // .then(token => {
        //   localStorage.setItem('accessToken', token);
        //   navigate("/", { state: { message: "Ok" } }); // <-- navigate to new path
        // })
        // .catch(e => {
        //   localStorage.removeItem('accessToken');
        //   setMessage(e.message);
        // });
        .then(function (response) {
          if(response.data.success==true){
          console.log(response);
          console.log("Successfully Logged in ");
          // localStorage.setItem('refresh-token',response.data['refresh-token']);
          // setCookie('access-token',response.data[acess-token]);
          // setCookie('user-name',Id);
          navigate('/');}
          else if(response.data.success==false){
          console.log("login failed");
          alert(response.data.message)}
        })
        .catch(function(error){
          console.log(error);
        })
      
    }


      
    
    return (
      <div className="page-container">
        <div className="Loginbox">
          <div className="login-leftside">
            LORA IOT
            DATA MANAGEMENT
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
                onChange={e=>setid(e.target.value)}
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
                onChange={e=>setPassword(e.target.value)}
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
