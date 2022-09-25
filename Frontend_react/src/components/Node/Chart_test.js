import { AreaChart,  XAxis, ResponsiveContainer, Area, Tooltip, CartesianGrid } from 'recharts';
import Title from './Title';
import "react-date-range/dist/styles.css"; // main style file 
import 'react-date-range/dist/theme/default.css'; // theme css file  
import Calendar from './Calendar.js';
import CalendarMenu from './Calendar_menu';

import axios from 'axios';
import React, { useEffect, useState} from 'react';

var port=1;

const ChartTemp = () => {
  const [data, setData] = useState('전송실패');
  var AxiosData = null;

  try{
  AxiosData = async() => {
     axios.get("http://220.149.31.104:9090/api/formerData/temperature/list"+"/"+port,
    {
      params: {
        startDate : "2022-01-01",
        endDate : "2022-02-01"
      }
    })
      .then((response) => {
        const dataTemp = response.data.data.map((data) => {
          return{
            date: data.date,
            max: data.max,
            average: data.average,
            min: data.min
          };
        });
      setData([{}, ...dataTemp, {}]);
    });
  }
    }catch(error) {
      console.log("에러가 발생함");
      data = "";
    }

    useEffect(() => {
      AxiosData()
    },[]);
  
    return (
      <React.Fragment>
        <Title float="right">Today <CalendarMenu ></CalendarMenu></Title>
        <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          
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
  