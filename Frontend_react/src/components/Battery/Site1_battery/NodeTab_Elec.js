import * as React from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { useState, useEffect } from "react";
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

import axios from 'axios';
import { YAxis,  XAxis, Tooltip, CartesianGrid, Line, Legend, LineChart } from 'recharts';

import "react-date-range/dist/styles.css"; // main style file 
import 'react-date-range/dist/theme/default.css'; // theme css file  

import CardContent from '@mui/material/CardContent';


function NodeTab_Elec(props){
    const [temps, setTemps] = useState([]);
    const Temps = () => {
        axios.get("/api/formerData/electricCurrent/list/"+props.nodePort,
        {
          params: {
          startDate : "2022-01-01",
          endDate : "2022-02-01"
        }
        })
          .then(response => {
            const tempinfo = response.data.data.map((data) => {
              return {
              
                date: data.date,
                max: data.max,
                average: data.average,
                min: data.min
                
              };
            });
            setTemps([...tempinfo]);
            console.log(tempinfo);
          });
    
      }
      useEffect(() => { Temps() }, []);

    return(
    <Grid item xs={12} md={8} lg={9}>
        <Paper elevation={6}
        sx={{
        p: 2,
        display: 'flex',
        flexDirection: 'column',
        height: 300,
        }}
    >
        <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {props.name} <Button href={props.url}></Button>
            
            <Grid item xs={12} md={8} lg={9}>
                <Paper elevation={7}
                sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 200,
                }}
                >

                <LineChart width={1300} height={150} data={temps}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis fontSize={10} dataKey="date" />
                <YAxis fontSize={15} />
                <Tooltip />
                <Legend verticalAlign="bottom" height={10} />
                <Line type="monotone" dataKey="max" stroke="#8884d8" />
                <Line type="monotone" dataKey="average" stroke="#82ca9d" />
                <Line type="monotone" dataKey="min" stroke="#ffc658" />
                </LineChart>

                

                </Paper>
            </Grid>

            
        </Typography>
        <Typography gutterBottom variant="h9" component="div">
        </Typography>
        </CardContent>
        </Paper>
    </Grid>
    );
}


export default NodeTab_Elec;