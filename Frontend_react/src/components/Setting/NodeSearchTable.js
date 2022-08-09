/*import React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [ //Error type: 전압오류, 전류오류, 온도오류, 연결끊김
  { field: 'id', headerName: 'Error', width: 100,sortable: false },
  { field: 'password', headerName: 'Site',type: 'number',  width: 130 },
  { field: 'contact', headerName: 'Battery', type: 'number', width: 130 },
  { field: 'employeenum', headerName: 'Node', type: 'number', width: 130 },
  { field: 'authority', headerName: 'Time', type: 'number', width: 160 },
];

const rows = [
  { id: '전압오류', password: '1', contact: '12', employeenum: 35 },
  { id: '전류오류', password: '2', contact: '23', employeenum: 42 },
  { id: '온도오류', password: '3', contact: '34', employeenum: 45 },
  { id: '전류오', password: '4', contact: '45', employeenum: 16 },
  //{ id: '전압오류', password: '6', contact: '', employeenum: 150 },
  //{ id: '온도오류', password: '7', contact: '', employeenum: 44 },
  //{ id: '전류오류', password: '8', contact: '', employeenum: 36 },
  { id: '연결끊김', password: '9', contact: '56', employeenum: 65 },
];

export default function NodeSeachTable() {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
}*/
import MUIDataTable from "mui-datatables";
import React, { useState } from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "@mui/material/styles";
import { createTheme } from "@mui/material/styles";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";

const muiCache = createCache({
  key: "mui-datatables",
  prepend: true
});

function NodeSeachTable() {
  const [responsive, setResponsive] = useState("vertical");
  const [tableBodyHeight, setTableBodyHeight] = useState("400px");
  const [tableBodyMaxHeight, setTableBodyMaxHeight] = useState("");
  const [searchBtn, setSearchBtn] = useState(true);
  const [downloadBtn, setDownloadBtn] = useState(true);
  const [printBtn, setPrintBtn] = useState(true);
  const [viewColumnBtn, setViewColumnBtn] = useState(true);
  const [filterBtn, setFilterBtn] = useState(true);

  const columns = [
    { name: "Name", options: { filterOptions: { fullWidth: true } } },
    "Title",
    "Location"
  ];

  const options = {
    search: searchBtn,
    download: downloadBtn,
    print: printBtn,
    viewColumns: viewColumnBtn,
    filter: filterBtn,
    filterType: "dropdown",
    responsive,
    tableBodyHeight,
    tableBodyMaxHeight,
    onTableChange: (action, state) => {
      console.log(action);
      console.dir(state);
    }
  };

  const data = [
    ["Gabby George", "Business Analyst", "Minneapolis"],
    [
      "Aiden Lloyd",
      "Business Consultant for an International Company and CEO of Tony's Burger Palace",
      "Dallas"
    ],
    ["Jaden Collins", "Attorney", "Santa Ana"],
    ["Franky Rees", "Business Analyst", "St. Petersburg"],
    ["Aaren Rose", null, "Toledo"],
    ["Johnny Jones", "Business Analyst", "St. Petersburg"],
    ["Jimmy Johns", "Business Analyst", "Baltimore"],
    ["Jack Jackson", "Business Analyst", "El Paso"],
    ["Joe Jones", "Computer Programmer", "El Paso"],
    ["Jacky Jackson", "Business Consultant", "Baltimore"],
    ["Jo Jo", "Software Developer", "Washington DC"],
    ["Donna Marie", "Business Manager", "Annapolis"]
  ];

  return (
    <CacheProvider value={muiCache}>
      <ThemeProvider theme={createTheme()}>
        <FormControl>
          <InputLabel id="demo-simple-select-label">
            Responsive Option
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={responsive}
            style={{ width: "200px", marginBottom: "10px", marginRight: 10 }}
            onChange={(e) => setResponsive(e.target.value)}
          >
            <MenuItem value={"vertical"}>vertical</MenuItem>
            <MenuItem value={"standard"}>standard</MenuItem>
            <MenuItem value={"simple"}>simple</MenuItem>

            <MenuItem value={"scroll"}>scroll (deprecated)</MenuItem>
            <MenuItem value={"scrollMaxHeight"}>
              scrollMaxHeight (deprecated)
            </MenuItem>
            <MenuItem value={"stacked"}>stacked (deprecated)</MenuItem>
          </Select>
        </FormControl>
        <FormControl>
          <InputLabel id="demo-simple-select-label">
            Table Body Height
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={tableBodyHeight}
            style={{ width: "200px", marginBottom: "10px", marginRight: 10 }}
            onChange={(e) => setTableBodyHeight(e.target.value)}
          >
            <MenuItem value={""}>[blank]</MenuItem>
            <MenuItem value={"400px"}>400px</MenuItem>
            <MenuItem value={"800px"}>800px</MenuItem>
            <MenuItem value={"100%"}>100%</MenuItem>
          </Select>
        </FormControl>
        <FormControl>
          <InputLabel id="demo-simple-select-label">
            Max Table Body Height
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={tableBodyMaxHeight}
            style={{ width: "200px", marginBottom: "10px" }}
            onChange={(e) => setTableBodyMaxHeight(e.target.value)}
          >
            <MenuItem value={""}>[blank]</MenuItem>
            <MenuItem value={"400px"}>400px</MenuItem>
            <MenuItem value={"800px"}>800px</MenuItem>
            <MenuItem value={"100%"}>100%</MenuItem>
          </Select>
        </FormControl>
        <FormControl>
          <InputLabel id="demo-simple-select-label">Search Button</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={searchBtn}
            style={{ width: "200px", marginBottom: "10px" }}
            onChange={(e) => setSearchBtn(e.target.value)}
          >
            <MenuItem value={"true"}>{"true"}</MenuItem>
            <MenuItem value={"false"}>{"false"}</MenuItem>
            <MenuItem value={"disabled"}>disabled</MenuItem>
          </Select>
        </FormControl>
        <FormControl>
          <InputLabel id="demo-simple-select-label">Download Button</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={downloadBtn}
            style={{ width: "200px", marginBottom: "10px" }}
            onChange={(e) => setDownloadBtn(e.target.value)}
          >
            <MenuItem value={"true"}>{"true"}</MenuItem>
            <MenuItem value={"false"}>{"false"}</MenuItem>
            <MenuItem value={"disabled"}>disabled</MenuItem>
          </Select>
        </FormControl>
        <FormControl>
          <InputLabel id="demo-simple-select-label">Print Button</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={printBtn}
            style={{ width: "200px", marginBottom: "10px" }}
            onChange={(e) => setPrintBtn(e.target.value)}
          >
            <MenuItem value={"true"}>{"true"}</MenuItem>
            <MenuItem value={"false"}>{"false"}</MenuItem>
            <MenuItem value={"disabled"}>disabled</MenuItem>
          </Select>
        </FormControl>
        <FormControl>
          <InputLabel id="demo-simple-select-label">
            View Column Button
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={viewColumnBtn}
            style={{ width: "200px", marginBottom: "10px" }}
            onChange={(e) => setViewColumnBtn(e.target.value)}
          >
            <MenuItem value={"true"}>{"true"}</MenuItem>
            <MenuItem value={"false"}>{"false"}</MenuItem>
            <MenuItem value={"disabled"}>disabled</MenuItem>
          </Select>
        </FormControl>
        <FormControl>
          <InputLabel id="demo-simple-select-label">Filter Button</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={filterBtn}
            style={{ width: "200px", marginBottom: "10px" }}
            onChange={(e) => setFilterBtn(e.target.value)}
          >
            <MenuItem value={"true"}>{"true"}</MenuItem>
            <MenuItem value={"false"}>{"false"}</MenuItem>
            <MenuItem value={"disabled"}>disabled</MenuItem>
          </Select>
        </FormControl>
        <MUIDataTable
          title={"ACME Employee list"}
          data={data}
          columns={columns}
          options={options}
        />
      </ThemeProvider>
    </CacheProvider>
  );
}

ReactDOM.render(<NodeSearchTable />, document.getElementById("root"));

