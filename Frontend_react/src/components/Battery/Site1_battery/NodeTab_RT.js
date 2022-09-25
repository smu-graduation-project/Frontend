import * as React from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { useState, useEffect } from "react";


import axios from 'axios';
import { YAxis,  XAxis, Tooltip, CartesianGrid, Line, Legend, LineChart } from 'recharts';

import "react-date-range/dist/styles.css"; // main style file 
import 'react-date-range/dist/theme/default.css'; // theme css file  

import CardContent from '@mui/material/CardContent';
import MiniDrawer from '../../Node/node1';
import FullScreenDialog from '../../Node/node';

function NodeTab_RT({name, url, nodePort}){
    const [temps, setTemps] = useState([]);
    const Temps = () => {
        axios.get("/api/realtime/rawData",
        {
          params: {
          nodePort : nodePort,
          hour : 1
        }
        })
          .then(response => {
            const tempinfo = response.data.data.map((data) => {
              return {

                electricCurrent: data.electricCurrent,
                nodePort: data.nodePort,
                sequence: data.sequence,
                temperature: data.temperature,
                timeStamp: data.timeStamp,
                voltage: data.voltage 
                
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
        height: 350,
        }}
    >
        <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {name} <FullScreenDialog name={name} nodePort={nodePort} />
            
            <Grid item xs={12} md={8} lg={9}>
                <Paper elevation={7}
                sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 200,
                }}
                >

                <LineChart width={700} height={150} data={temps}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis fontSize={10} dataKey="timeStamp" />
                <YAxis fontSize={15} />
                <Tooltip />
                <Legend verticalAlign="bottom" height={10} />
                <Line type="monotone" dataKey="temperature" stroke="#8884d8" />
                <Line type="monotone" dataKey="electricCurrent" stroke="#82ca9d" />
                <Line type="monotone" dataKey="voltage" stroke="#ffc658" />
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


export default NodeTab_RT;