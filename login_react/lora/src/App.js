import React, { useState } from 'react';
import './App.css';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import FormControlLabel from '@mui/material/FormControlLabel';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';






export default function App() {

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
              width:'75%',
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
              autoFocus
            />
            <TextField
              margin="normal"
              label="Password"
              type="password"
              required
              fullWidth
              name="password"
              autoComplete="current-password"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              login
            </Button>
            
            <Link>
              Forgot password?
            </Link>
          </Box>
        </div>
      </div>
    </div>

  );
}




