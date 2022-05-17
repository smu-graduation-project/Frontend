import { useTheme } from '@mui/material/styles';
import { AreaChart, Line, XAxis, YAxis, Label, ResponsiveContainer, Area, Tooltip, CartesianGrid } from 'recharts';
import Title from './Title';

import axios from 'axios';
import React, { useEffect, useState} from 'react';

var port=1;

const ChartTemp = ({}) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("http://220.149.31.104:9090/api/formerData/temperature/list"+"/"+port)
      .then((res) => {
        const dataTemp = res.map((data) => {
          <li key={data.date} ></li>
        });
      setData([{}, ...dataTemp, {}]);
    });
  });
  
    return (
      <React.Fragment>
        <Title>Today</Title>
        <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          width={500}
          height={400}
          data={setData}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="xAxis" />
          <YAxis yAxisId="left" />
          <YAxis yAxisId="right" orientation="right" />
          <Tooltip />
          <Area type="monotone" dataKey="min" stackId="1" stroke="#8884d8" fill="#8884d8" />
          <Area type="monotone" dataKey="average" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
          <Area type="monotone" dataKey="max" stackId="1" stroke="#ffc658" fill="#ffc658" />
        </AreaChart>
      </ResponsiveContainer>
      </React.Fragment>
    )
  
}

export default ChartTemp;
  