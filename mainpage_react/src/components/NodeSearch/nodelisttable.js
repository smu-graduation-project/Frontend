import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useTable } from 'react-table';
import styled from 'styled-components';

const columnData=[
    {
        accessor:'nodename',
        Header: 'NodeName',
    },
    {
        accessor:'temperature',
        Header:'Temperature',
    },
    {
        accessor:'voltage',
        Header:'Voltage',
    },
    {
        accessor:'electricpower',
        Header:'ElectricPower',
    },
]
const columns = useMemo(()=>columnData,[]);

const data= useMemo(()=>[{
    "nodename":"노드입니다",
    "temperature":"온도입니다",
    "voltage":"전압입니다",
    "electricpower":"전류입니다"
}],[])
// const [info,setinfo]=usestate();
// const getRola=()=>{
//     data.getRola().then(item=>setinfo(item));
// };
// const data=useMemo(()=>info,[info])

const nodelisttable=({columns,data})=>{
    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });



    return ( <TableSheet {...getTableProps()}>
    <TableHead>
      {headerGroups.map(header => (
        // getHeaderGroupProps를 통해 header 배열을 호출한다
        <Header {...header.getHeaderGroupProps()}>
          {header.headers.map(col => (
            // getHeaderProps는 각 셀 순서에 맞게 header를 호출한다
            <Th {...col.getHeaderProps()}>{col.render('Header')}</Th>
          ))}
        </Header>
      ))}
    </TableHead>
    <tbody {...getTableBodyProps()}>
      {rows.map(row => {
        prepareRow(row);
        return (
          // getRowProps는 각 row data를 호출해낸다
          <tr {...row.getRowProps()}>
            {row.cells.map(cell => (
              // getCellProps는 각 cell data를 호출해낸다
              <Td {...cell.getCellProps()}>{cell.render('Cell')}</Td>
            ))}
          </tr>
        );
      })}
    </tbody>
  </TableSheet>
  );
        
    
}