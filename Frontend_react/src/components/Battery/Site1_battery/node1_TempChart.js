import { YAxis,  XAxis, Tooltip, CartesianGrid, Line, Legend, LineChart } from 'recharts';

import "react-date-range/dist/styles.css"; // main style file 
import 'react-date-range/dist/theme/default.css'; // theme css file  

import axios from 'axios';
import React, { useEffect, useState} from 'react';





const  MyResponsiveLine=({nodePort})=> {
  const [temps, setTemps] = useState([]);
  const Temps = () => {
    axios.get("/api/realtime/rawData",
    {
      params: {
        nodePort : {nodePort},
        hour : "1"
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
    <LineChart width={700} height={150} data={temps}
    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis fontSize={10} dataKey="timestamp" />
    <YAxis fontSize={15} />
    <Tooltip />
    <Legend verticalAlign="bottom" height={10} />
    <Line type="monotone" dataKey="electricCurrent" stroke="#8884d8" />
    <Line type="monotone" dataKey="temperature" stroke="#82ca9d" />
    <Line type="monotone" dataKey="voltage" stroke="#ffc658" />
  </LineChart>
  
  )
}

export default MyResponsiveLine;

 {/*<MyResponsiveLine
      data={[
        {
          "id": "minimum",//max or min or average
          "color": "hsl(271, 70%, 50%)",
          "data": [
            {
              "x": date,//날짜
              "y": min //온도
            }
          ]
        },
        {
          "id": "Average",
          "color": "hsl(354, 70%, 50%)",
          "data": [
            {
              "x": date,
              "y": average
            }
          ]
        },
        {
          "id": "Maximum",
          "color": "hsl(59, 70%, 50%)",
          "data": [
            {
              "x": date,
              "y": max
            }
          ]
        }
      ]}
      margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
      xScale={{ type: 'point' }}
      yScale={{
          type: 'linear',
          min: 'auto',
          max: 'auto',
          stacked: true,
          reverse: false
      }}
      yFormat=" >-.2f"
      axisTop={null}
      axisRight={null}
      axisBottom={{
          orient: 'bottom',
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: 'transportation',
          legendOffset: 36,
          legendPosition: 'middle'
      }}
      axisLeft={{
          orient: 'left',
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: 'count',
          legendOffset: -40,
          legendPosition: 'middle'
      }}
      colors={{ scheme: 'accent' }}
      lineWidth={4}
      pointSize={10}
      pointColor={{ theme: 'background' }}
      pointBorderWidth={2}
      pointBorderColor={{ from: 'serieColor' }}
      pointLabelYOffset={-12}
      enableArea={true}
      areaOpacity={0.85}
      useMesh={true}
      legends={[
          {
              anchor: 'bottom-right',
              direction: 'column',
              justify: false,
              translateX: 100,
              translateY: 0,
              itemsSpacing: 0,
              itemDirection: 'left-to-right',
              itemWidth: 80,
              itemHeight: 20,
              itemOpacity: 0.75,
              symbolSize: 12,
              symbolShape: 'circle',
              symbolBorderColor: 'rgba(0, 0, 0, .5)',
              effects: [
                  {
                      on: 'hover',
                      style: {
                          itemBackground: 'rgba(0, 0, 0, .03)',
                          itemOpacity: 1
                      }
                  }
              ]
          }
      ]}
  />*/}