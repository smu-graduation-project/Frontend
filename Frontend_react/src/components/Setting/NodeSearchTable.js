import MUIDataTable from "mui-datatables";
import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "@mui/material/styles";
import { createTheme } from "@mui/material/styles";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import axios from 'axios';
var port = 1;
const muiCache = createCache({
  key: "mui-datatables",
  prepend: true
});

export default function NodeSeachTable() {
  const [responsive, setResponsive] = useState("vertical");
  const [tableBodyHeight, setTableBodyHeight] = useState("400px");
  const [tableBodyMaxHeight, setTableBodyMaxHeight] = useState("");
  const [searchBtn, setSearchBtn] = useState(true);
  const [downloadBtn, setDownloadBtn] = useState(true);
  const [printBtn, setPrintBtn] = useState(true);
  const [viewColumnBtn, setViewColumnBtn] = useState(true);
  const [filterBtn, setFilterBtn] = useState(true);
  const [users, setUsers] = useState([]);

  const Users = () => {
    axios.get('/api/product/node/list/'+port)
      .then(response => {
        const employeeinfo = response.data.data.map((data) => {
          return {
            id: data.id,
            port: data.port,
            name: data.name,
            type: data.type,
            information: data.information
          };
        });
        setUsers([...employeeinfo]);
        console.log(employeeinfo);
      });

  }
  useEffect(() => { Users() }, []);

  const columns = [
    //{ name: "Node", options: { filterOptions: { fullWidth: true } } },
    {
        name: 'name',
        selector: row => row.name,
        sortable: true,
      },
      {
        name: 'port',
        selector: row => row.port,
        sortable: true,
      },
      {
        name: 'id',
        selector: row => row.id,
        sortable: true,
      },
      {
        name: 'type',
        selector: row => row.type,
        sortable: true,
      },
      {
        name: 'information',
        selector: row => row.information,
        sortable: true,
      }
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

 

  return (
    <CacheProvider value={muiCache}>
      <ThemeProvider theme={createTheme()}>
         
        <MUIDataTable
          title={"Node list"}
          data={users}
          columns={columns}
          options={options}
        />
      </ThemeProvider>
    </CacheProvider>
  );
}
