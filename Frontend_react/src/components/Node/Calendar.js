import { Calendar } from 'react-date-range';
import { Component } from 'react';
import * as React from 'react';
import { DateRangePicker } from 'react-date-range';

import {useState} from 'react'
import { DateRange } from 'react-date-range';


function Cal(){
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: null,
      key: 'selection'
    }
  ]);
  
      <DateRange
        editableDateInputs={true}
        onChange={item => setState([item.selection])}
        moveRangeOnFirstSelection={false}
        ranges={state}
      />
}

export default Cal;