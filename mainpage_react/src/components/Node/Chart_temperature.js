import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import { LineChart, AreaChart, Area, Tooltip, Line, XAxis, YAxis, Label, ResponsiveContainer } from 'recharts';
import Title from './Title';

function createData(time, max, min) {
    return { time, max, min };
  }
  
  const rangeData = [
    {
      "time": "00:00",
      "temp1": [
        0, 26.5
      ],
      "temp2": [
        0, 23.0
      ]

    },
    {
      "time": "03:00",
      "temp1": [
        0, 25.7
      ],
      "temp2": [
        0, 24.0
      ]
    },
    {
      "time": "05:00",
      "temp1": [
        0, 23.0
      ],
      "temp2": [
        0, 22.0
      ]
    },
    {
      "time": "07:00",
      "temperature": [
        26.5, 24.7
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
  
  export default function Chart() {
    const theme = useTheme();
  
    return (
      <React.Fragment>
        <Title>Today</Title>
        <ResponsiveContainer>
          <AreaChart
            data={rangeData}
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
            <Area dataKey="temp1" stroke="#8884d8" fill="#8884d8" />
            <Area dataKey="temp2" stroke="#8884d8" fill="yellow" />
            <Tooltip />
          </AreaChart>
        </ResponsiveContainer>
      </React.Fragment>
    );
  }

  