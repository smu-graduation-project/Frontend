import React, { useState, useEffect } from 'react';
import { useTheme } from '@mui/material/styles';
import { LineChart, AreaChart, Area, Tooltip, Line, XAxis, YAxis, Label, ResponsiveContainer } from 'recharts';
import Title from './Title';
import axios from 'axios';

/* 가상데이터

function createData(date) {
   {posts.map(post => (
            <li key = {post.date}>
              this.date={post.date}
              this.maxTemperature={post.maxTemperature}
              this.minTemperature={post.minTemperature}
              this.averageTemperature={post.averageTemperature}
            </li>
          ))}
    return { date,maxTemperature,minTemperature,averageTemperature };
  }
  
  const rangeData = [
    {
      "time": "00:00",
      "max": [
        0, 26.5
      ],
      "min": [
        0, 23.0
      ]

    },
    {
      "time": "03:00",
      "max": [
        0, 25.7
      ],
      "min": [
        0, 24.0
      ]
    },
    {
      "time": "05:00",
      "max": [
        0, 23.0
      ],
      "min": [
        0, 21.0
      ]
    },
    {
      "time": "07:00",
      "max": [
        0, 26.0
      ],
      "min": [
        0, 23.0
      ]
    },
    {
      "time": "09:00",
      "max": [
        0, 25.0
      ],
      "min": [
        0, 21.0
      ]
    }

  ]
  const data = [
    createData('00:00', 26.5, 23.0),
    createData('03:00', 25.7, 24.0),
    createData('06:00', 23.0, 22.0),
    createData('09:00', 26.5, 24.7),
    createData('12:00', 24.0, 21.3),
    createData('15:00', 25.0, 22.4),
    createData('18:00', 25.6, 23.8),
    createData('21:00', 26.5, 24.2),
    createData('24:00', undefined),
  ];
  
  */
/*
  function createData(date) {
    var max, min, average;
    {posts.map(post => (
             <li key = {post.date}>
               this.date={post.date}
               this.maxTemperature={post.max}
               this.minTemperature={post.min}
               this.averageTemperature={post.average}
             </li>
           ))}
     return { date, max, min, average };
  }
*/

  export default function Chart() {
    const [posts] = useState([]);

    function createData(date) {
      var max, min, average;
      {posts.map(post => (
               <li key = {post.date}>
                 this.date={post.date}
                 this.maxTemperature={post.max}
                 this.minTemperature={post.min}
                 this.averageTemperature={post.average}
               </li>
             ))}
       return { date, max, min, average };
    }

    useEffect(async () => {
      /*axios({
        method: 'GET',
        url:'api/formerData/temperature'
      }).then(response => setPosts(response.data))*/

      
      try{
        const f = () => {
          axios.get('http://220.149.31.104:8080/api/formerData/temperature/list', 
          {
            "startDate" : "2022-01-01",
            "endDate" : "2022-03-05",
            "port" : 1
          })
          .then((response)=> {
            f(response.data)
          })
        }
      }catch(error){
        console.log(error)
      }

    })

/* 
const f = () => {
    axios.get('http://220.149.31.104:8080/api/formerData/temperature/list', 
      { success: true },
      {code: code},
      {message: "성공"}
    )
    .then((response)=> {
      f(response.data.date)
    })
  } */

    const theme = useTheme();
  
    return (
      <div>
      <ul>
          {posts.map(post => (
            <li key = {post.date}>
              createData(date)
            </li>
          ))}
      </ul>

      <React.Fragment>
        <Title>Today</Title>
        <ResponsiveContainer>
          <AreaChart
            data={createData}
            margin={{
              top: 16,
              right: 16,
              bottom: 0,
              left: 24,
            }}
          >
            <XAxis
              dataKey="time"
              stroke={theme.palette.text.secondary}
              style={theme.typography.body2}
            />
            <YAxis
              stroke={theme.palette.text.secondary}
              style={theme.typography.body2}
            >
              <Label
                angle={270}
                position="left"
                style={{
                  textAnchor: 'middle',
                  fill: theme.palette.text.primary,
                  ...theme.typography.body1,
                }}
              >
                Temperature

              </Label>
            </YAxis>
            <Area type="monotone" dataKey="maxTemperature" stroke="#ffc658" fill="#ffc658" />
            <Area type="monotone" dataKey="averageTemperature" stroke="#82ca9d" fill="#82ca9d" />
            <Area type="monotone" dataKey="minTemperature" stroke="#8884d8" fill="#8884d8" />
            <Tooltip />
          </AreaChart>
        </ResponsiveContainer>
      </React.Fragment>
      </div>
    );
  }

  